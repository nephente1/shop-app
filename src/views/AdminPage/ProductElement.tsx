import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { ProductData } from "../ProductDetails/ProductDetails";

export const RemoveOption = styled('div')`
	width: 100px;
	text-align: center;
	cursor: pointer;
	align-self: center;
`;

export const ItemElement = styled('div')`
	display: flex;
	flex-wrap: wrap;
	border-top: 1px solid ${props => props.theme.lightDark};
	justify-content: space-between;
`;


interface ProductElementPropsType {
	productData: ProductData
}

export const ProductElement = (props: ProductElementPropsType) => {

	return(
		<ItemElement>
			<p>{props.productData.title}</p>
			<RemoveOption>
				<Button onClick={() => console.log(props.productData.id)} bgColor='blue' size='small'>Remove</Button>
			</RemoveOption>
		</ItemElement>

	)
}