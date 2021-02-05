import { BoxItem } from "../components/BoxItem";
import styled from 'styled-components';
import React from "react";
// import { getAllProducts } from "../appState/api";
import { instance } from "../appState/axios";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";

export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const MainPage = () => {

	const [data, setData] = React.useState<AxiosResponse<any>>();

	const getAllProducts = React.useCallback( async() => {
		try {
			const resp = await instance.get("/products?limit=10");
			console.log('çook', Cookies.get('accessToken'))
			setData(resp);

			console.log('resp', resp);
		}
		catch (error){
			console.log(error);
		}
	}, [])

	React.useEffect( () => {
		getAllProducts();
	}, [getAllProducts])

	console.log('data', data?.data)
	const products = React.useMemo( () => {
		console.log('test')
		return data?.data.map( (el: any) => <BoxItem key={el.id} title={el.title} price={el.price} category={el.category} image={el.image}/>)
	}, [data])

	return(
		<>
			<div>MainPage</div>
			<p>Witamy w naszym sklepie</p>
			<BoxesContainer>
		{products}
			</BoxesContainer>

		</>
	)
}

export default MainPage;