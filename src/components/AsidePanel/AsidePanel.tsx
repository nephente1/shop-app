import React from "react";
import styled from 'styled-components';
import { BasketPanel } from "../BasketPanel/BasketPanel";
import { CategoriesAside } from "./CategoriesAside";


export const AsideContainer = styled('aside')`
	padding: 20px;
    text-align: left;
	width: 150px;
	background: ${props => props.theme.light};
	display: flex;
    flex-direction: column;
`;

export const AsidePanel = () => {

	return(
		<AsideContainer>
			<h3>Categories</h3>
			<CategoriesAside />
			<BasketPanel />
		</AsideContainer>
	)
};
