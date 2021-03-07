import {Link} from 'react-router-dom';
//import { theme } from '../App';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../appState/redux/rootReducer';
import React from 'react';

export const NavWrapper = styled('div')`
	background:  ${props => props.theme.dark};
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	height: auto;
	flex-direction: column;
	@media screen and (min-width: 615px){
		height: 70px;
		justify-content: space-between;
		flex-direction: row;
	}
`;

export const Nav = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 0 30px 0 0;
	@media screen and (min-width: 615px){
		display: inline-flex;
		flex-direction: row;
	}
`;
export const LinkItem = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 10px 20px;
	display: flex;
	line-height: 1;
	align-items: center;
	position: relative;

	&:hover {
		background: ${props => props.theme.dark};
	}
`;

export const Logo = styled('div')`
	color: white;
	margin: 0 30px;
	font-size: 28px;
	display: flex;
`;

export const CartAmountNumber = styled('div')`
	position: absolute;width: 20px;
	height: 20px;
	border-radius: 50%;
	background: red;
	color: white;
	top: 10px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface TopMenuPropsType {
	isAuthorized: boolean
}

export const TopMenu = ({isAuthorized}: TopMenuPropsType) => {

	const getActualCart = useSelector( (state: RootState) => state);
	const cartItems = getActualCart.cartReducer.cartData;

	const getProductsAmount = React.useMemo(() => {
		return cartItems.reduce((result, item) => item.amount + result, 0);
	}, [cartItems]);

	return (
		<NavWrapper data-test="NavWrapper">
			<Logo>The best shop</Logo>
			<Nav>
				<LinkItem to="/">MainPage</LinkItem>
				<LinkItem to="/public">Public Page</LinkItem>
				<LinkItem to="/cart" className="x-ShoppingCart">
					<CartAmountNumber>{getProductsAmount}</CartAmountNumber>
					Shopping cart
				</LinkItem>
				<LinkItem to="/login">Login</LinkItem>
				{isAuthorized === true  ? <LinkItem to="/admin">Admin Page</LinkItem> : null}
			</Nav>
		</NavWrapper>

	);
};
