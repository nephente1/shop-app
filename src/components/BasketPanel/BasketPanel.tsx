import React from "react";
import styled from 'styled-components';



export const BasketContainer = styled('aside')`

`;

interface BasketPanelPropsType {
	title: string,
	quantity?: string,
	price?: string
}

export const BasketPanel = (props: any) => {

	const cartItems = [{title: 'rower'}, {title: 'poduszka'}];

	const renderBasket = React.useMemo(() => {
		return cartItems.map((el: BasketPanelPropsType) => <li>{el.title}</li>)
	},[cartItems])

	return(
		<BasketContainer>
			<h3>Basket</h3>
			<p>Basket is empty</p>
			<ul>
				{renderBasket}
			</ul>

		</BasketContainer>
	)
};
