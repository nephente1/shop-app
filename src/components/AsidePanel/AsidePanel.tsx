import React from "react";
import styled from 'styled-components';
import { CategoriesPanel } from "./CategoriesPanel";


export const AsideContainer = styled('aside')`
	padding: 20px 0 0 20px;
    text-align: left;
	min-width: 150px;
	background: ${props => props.theme.light};
`;

export const AsidePanel = () => {

	return(
		<AsideContainer>
			<h3>Categories</h3>
			<CategoriesPanel />
		</AsideContainer>
	)
};
