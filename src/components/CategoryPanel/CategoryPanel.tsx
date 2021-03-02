import React from 'react';
import { CategoriesList } from './CategoriesList';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { CategoryTitle } from '../../views/ProductDetails/ProductDetails.styles';
import { PageContainer } from '../../views/MainStyles';

export const BoxesContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;


type TParams = { category: string };
export const CategoryPanel = ({match}: RouteComponentProps<TParams>) => {

	return (
		<>
			<PageContainer>
				<CategoryTitle>{match.params.category}</CategoryTitle>
				<CategoriesList category={match.params.category} />
			</PageContainer>
		</>
	);
};
