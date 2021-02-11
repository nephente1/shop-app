import {Link} from "react-router-dom";
//import { theme } from '../App';
import styled from 'styled-components';
import { withTheme } from "@material-ui/core/styles"

export const NavWrapper = withTheme(styled('div')`
	background:  ${props => props.theme.palette.info.dark};
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	height: 70px;
`);

export const Nav = styled('div')`
	display: inline-flex;
	height: 100%;
	margin: 0 30px 0 0;
`
export const LinkItem = withTheme(styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 0 20px;
	height: 100%;
	display: flex;
	line-height: 1;
	align-items: center;

	&:hover {
		background: ${props => props.theme.palette.grey.A400};
	}
`);

export const Logo = styled('div')`
	color: white;
	margin: 0 30px;
	font-size: 2em;
`

interface TopMenuPropsType {
	isAuthorized: boolean
}

export const TopMenu = ({isAuthorized}: TopMenuPropsType) => {

	console.log('isAuthorized Top Menu', isAuthorized)
	return(
		<NavWrapper data-test="NavWrapper">
			<Logo>The best shop</Logo>
			<Nav>
				<LinkItem to="/">MainPage</LinkItem>
				<LinkItem to="/public">Public Page</LinkItem>
				<LinkItem to="/login">Login</LinkItem>
				{isAuthorized === true  ? <LinkItem to="/protected">Protected Page</LinkItem> : null}
			</Nav>
		</NavWrapper>

	)
}