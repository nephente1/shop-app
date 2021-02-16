import React from "react";
import { instance } from "../../appState/axios";
import { AxiosResponse } from "axios";
import { Spinner } from "../Spinner.styles";
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const AsideContainer = styled('aside')`
	padding: 20px 0 0 20px;
    text-align: left;
	min-width: 150px;
	background: ${props => props.theme.light};
`;

export const CategoryLink = styled(Link)`
	text-decoration: none;
	color: ${props => props.theme.dark};
	margin: 0 0 10px 0;
	text-transform: capitalize;
	font-weight: 600;
	&:hover {
		color: ${props => props.theme.blue};
	}
`;

export const CategoriesAside = () => {

	const [categories, setCategories] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getAllCategories = React.useCallback( async() => {
		try {
			const resp = await instance.get("/products/categories");
			setCategories(resp);
			setLoading(false);
		}
		catch (error){
			console.log(error);
		}
	}, [])

	React.useEffect( () => {
		getAllCategories();
	}, [ getAllCategories])


	const categoriesList = React.useMemo( () => {
		return categories?.data.map( (el: any) => <CategoryLink to={`/categories/${el}`} key={el}>{el}</CategoryLink>)
	}, [categories])

	return(
		loading ? <Spinner /> : categoriesList
		);
};
