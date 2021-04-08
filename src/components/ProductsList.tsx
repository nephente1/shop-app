import { BoxItem } from './BoxItem';
import styled from 'styled-components';
import React from 'react';
// import { getAllProducts } from "../appState/api";
import { instance } from '../appState/axios';
import { AxiosResponse } from 'axios';
import { Spinner } from './Spinner.styles';
import { ProductData } from '../views/ProductDetails/ProductDetails';


export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ProductList = () => {

	const [products, setProducts] = React.useState<AxiosResponse<Array<ProductData>>>();
	const [loading, setLoading] = React.useState(true);

	const getAllProducts = React.useCallback( async () => {
		try {
			const resp = await instance.get('/products?limit=10');
			setProducts(resp);
			setLoading(false);
		}
		catch (error) {
			console.log(error);
		}
	}, []);


	React.useEffect( () => {
		getAllProducts();
	}, [getAllProducts]);

	const productsList = React.useMemo( () => {
		return products?.data.map( (el: any) => <BoxItem key={el.id} productData={el} id={el.id} title={el.title} price={el.price} image={el.image}/>);
	}, [products]);


	return (
		<>
		{ loading ? <Spinner /> :
			<BoxesContainer>
				{productsList}
			</BoxesContainer>
		}
		</>
	);
};
