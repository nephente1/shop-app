import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { RootState } from "../../appState/redux/rootReducer";
import { ProductData } from "../../views/ProductDetails/ProductDetails";
import { Button } from "../Button";


export const BasketContainer = styled('aside')`
`;

export const CartItem = styled('div')`
	display: flex;
	flex-wrap: wrap;
	display: flex;
	flex-wrap: wrap;
	border-top: 1px solid ${props => props.theme.lightDark};
`;

export const ItemName = styled('p')`
	font-size: 12px;
	text-overflow: ellipsis;
    overflow: hidden;
	width: 150px;
	white-space: nowrap;
	margin: 10px 0 0 0;
`;

export const ItemAmount = styled('p')`
	font-size: 12px;
	width: 50px;
`;

export const ItemPrice = styled('p')`
	font-size: 12px;
`;

type CartPanelItemsPropsType = Pick<ProductData, "id" | "title" | "amount" | "price"> ;


export const CartPanel = () => {
	const getActualCart = useSelector( (state: RootState) => state);
	const cartItems = getActualCart.cartReducer.cartData;

	const itemsPrice = (a: number, b: number) => a * b;

	const renderCart = React.useMemo(() => {
		return cartItems.map((el: CartPanelItemsPropsType) =>
			<CartItem key={el.id}>
				<ItemName>{el.title}</ItemName>
				<ItemAmount>{el.amount} pcs.</ItemAmount>
				<ItemPrice>{itemsPrice(el.price, el.amount)} $</ItemPrice>
			</CartItem>)
	},[cartItems]);

	let history = useHistory();
	const cartRedirection = () => {
        history.push('/cart');
	}

	return(
		<BasketContainer>
			<h3>Basket</h3>
			{ cartItems.length ?
				<>
					{renderCart}
					<Button onClick={cartRedirection} size='small' bgColor='blue'>Go to full cart</Button>
				</> :
				<p>Basket is empty, add something to cart</p>
			}

		</BasketContainer>
	)
};
