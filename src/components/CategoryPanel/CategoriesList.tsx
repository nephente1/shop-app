import { BoxItem } from "../BoxItem";
import styled from 'styled-components';
import React from "react";
// import { getAllProducts } from "../appState/api";
import { instance } from "../../appState/axios";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";
import { Spinner } from "../Spinner.styles";


export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

type TParams = { category: string };

export const CategoriesList = ({category}: TParams) => {

	const [products, setProducts] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getCategoryProducts = React.useCallback( async() => {
		try {
			const resp = await instance.get(`/products/category/${category}`);
			console.log('çook', Cookies.get('accessToken'))
			setProducts(resp);
			setLoading(false);
		}
		catch (error){
			console.log(error);
		}
	}, [category])


	React.useEffect( () => {
		getCategoryProducts();
		setLoading(true);
	}, [getCategoryProducts])

	const categoryList = React.useMemo( () => {
		return products?.data.map( (el: any) => <BoxItem key={el.id} productData={el} id={el.id} title={el.title} price={el.price} image={el.image}/>)
	}, [products]);


	return(
		<>
		{ loading ? <Spinner /> :
			<BoxesContainer>
				{categoryList}
			</BoxesContainer>
		}
		</>
	)
}
