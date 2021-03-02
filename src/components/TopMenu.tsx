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
	justify-content: space-between;
	align-items: center;
	height: 70px;
`;

export const Nav = styled('div')`
	display: inline-flex;
	height: 100%;
	margin: 0 30px 0 0;
`;
export const LinkItem = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 0 20px;
	height: 100%;
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
	font-size: 3vw;
	display: flex;
	flex: 1 0 180px;
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
