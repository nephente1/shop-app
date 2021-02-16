import styled from 'styled-components';
import React from "react";
import { ProductList } from "./ProductsList";

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

export const MainTitle = styled('h2')`
	font-size: 22px;
	color: ${props => props.theme.dark};
	&:hover {
		color: ${props => props.theme.blue};
	}
`;

export const MainPanel = (props: any) => {
	return(
		<>
			<ContentContainer>
				<MainTitle>Welcome to nice shop, checkout our products :</MainTitle>
				<ProductList />
			</ContentContainer>
		</>
	)
}
