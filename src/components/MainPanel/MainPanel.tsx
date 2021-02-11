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
`;


export const CenteredContainer = styled('div')`

`;
export const MainTitle = styled('h2')`
	font-size: 22px;
	color: ${props => props.theme.red};
`;

export const MainPanel = () => {

	return(
		<>
			<ContentContainer>
				<CenteredContainer>
					<MainTitle>Welcome to best shop!</MainTitle>
					<ProductList />
				</CenteredContainer>
			</ContentContainer>
		</>
	)
}
