import React from "react";
import { instance } from "../../appState/axios";
import { AxiosResponse } from "axios";
import { Spinner } from "../../components/Spinner.styles";
import styled from 'styled-components';


export const AsideContainer = styled('aside')`
	padding: 20px 0 0 20px;
    text-align: left;
	min-width: 150px;
	background: ${props => props.theme.light};
`;

export const CategoriesPanel = () => {

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

	console.log('categories', categories)

	const categoriesList = React.useMemo( () => {
		return categories?.data.map( (el: any) => <p key={el}>{el}</p>)
	}, [categories])

	return( loading ? <Spinner /> : categoriesList );
};
