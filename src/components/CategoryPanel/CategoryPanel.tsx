import React from "react";
import { CategoriesList } from './CategoriesList';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { CategoryTitle } from "../../views/ProductDetails/ProductDetails.styles";

export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ContentContainer = styled('div')`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-direction: column;
`;


type TParams = { category: string };
export const CategoryPanel = ({match}: RouteComponentProps<TParams>) => {

	return(
		<>
			<ContentContainer>
				<CategoryTitle>{match.params.category}</CategoryTitle>
				<CategoriesList category={match.params.category} />
			</ContentContainer>
		</>
	)
}
