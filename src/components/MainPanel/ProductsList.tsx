import { BoxItem } from "../../components/BoxItem";
import styled from 'styled-components';
import React from "react";
// import { getAllProducts } from "../appState/api";
import { instance } from "../../appState/axios";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";
import { Spinner } from "../../components/Spinner.styles";


export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ProductList = () => {

	const [products, setProducts] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getAllProducts = React.useCallback( async() => {
		try {
			const resp = await instance.get("/products?limit=10");
			console.log('çook', Cookies.get('accessToken'))
			setProducts(resp);
			setLoading(false);
		}
		catch (error){
			console.log(error);
		}
	}, [])


	React.useEffect( () => {
		getAllProducts();
	}, [getAllProducts])

	const productsList = React.useMemo( () => {
		return products?.data.map( (el: any) => <BoxItem key={el.id} id={el.id} title={el.title} price={el.price} category={el.category} image={el.image}/>)
	}, [products]);


	return(
		<>
		{ loading ? <Spinner /> :
			<BoxesContainer>
				{productsList}
			</BoxesContainer>
		}
		</>
	)
}
