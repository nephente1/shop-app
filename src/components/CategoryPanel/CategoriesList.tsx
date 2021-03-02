import { BoxItem } from '../BoxItem';
import styled from 'styled-components';
import React from 'react';
// import { getAllProducts } from "../appState/api";
import { instance } from '../../appState/axios';
import { AxiosResponse } from 'axios';
import { Spinner } from '../Spinner.styles';
import { ProductData } from '../../views/ProductDetails/ProductDetails';


export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

type TParams = { category: string };

export const CategoriesList = ({category}: TParams): JSX.Element => {

	const [products, setProducts] = React.useState<AxiosResponse<Array<ProductData>>>();
	const [loading, setLoading] = React.useState(true);

	const getCategoryProducts = React.useCallback( async () => {
		try {
			const resp = await instance.get(`/products/category/${category}`);
			setProducts(resp);
			setLoading(false);
		}
		catch (error) {
			console.log(error);
		}
	}, [category]);


	React.useEffect( () => {
		getCategoryProducts();
		setLoading(true);
	}, [getCategoryProducts]);

	const categoryList = React.useMemo( () => {
		return products?.data.map( (el: any) => <BoxItem key={el.id} productData={el} id={el.id} title={el.title} price={el.price} image={el.image}/>);
	}, [products]);


	return (
		<>
		{ loading ? <Spinner /> :
			<BoxesContainer>
				{categoryList}
			</BoxesContainer>
		}
		</>
	);
};
