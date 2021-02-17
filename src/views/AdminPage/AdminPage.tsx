
import styled from 'styled-components';
import React from "react";
// import { getAllProducts } from "../appState/api";

import Cookies from "js-cookie";
import { AxiosResponse } from "axios";

import { instance } from "../../appState/axios";
import { Spinner } from "../../components/Spinner.styles";
import { BoxItem } from '../../components/BoxItem';
import { ProductElement } from './ProductElement';


export const AdminPageContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	padding: 20px 30px;
`;

export const AdminPage = () => {

	const [products, setProducts] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getAllProducts = React.useCallback( async() => {
		try {
			const resp = await instance.get("/products");
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
		return products?.data.map( (el: any) => <ProductElement key={el.id} productData={el}/>)
	}, [products]);


	return(
		<>
		{ loading ? <Spinner /> :
			<AdminPageContainer>
				<h2>Admin Page</h2>
				<h4>Items to remove</h4>
				{productsList}
			</AdminPageContainer>
		}
		</>
	)
}
