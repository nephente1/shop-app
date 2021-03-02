import React from 'react';
import styled from 'styled-components';
import { CartPanel } from '../CartPanel/CartPanel';
import { CategoriesAside } from './CategoriesAside';


export const AsideContainer = styled('aside')`
	padding: 20px;
    text-align: left;
	width: 180px;
	background: ${props => props.theme.light};
	display: flex;
    flex-direction: column;
`;

export const AsidePanel = (): JSX.Element => {

	return (
		<AsideContainer>
			<h3>Categories</h3>
			<CategoriesAside />
			<CartPanel />
		</AsideContainer>
	);
};
