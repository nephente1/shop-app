import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
// import MainPage from "../views/MainPage";
import { AdminPage } from "../views/AdminPage/AdminPage";
import { Public } from "../views/Public";
import Login from "../views/login/Login";
import PrivateRoute from "./PrivateRoute";

import { useSelector } from 'react-redux';
import { RootState } from '../appState/redux/rootReducer';
import { TopMenu } from "../components/TopMenu";

import { CategoryPanel } from "../components/CategoryPanel/CategoryPanel";
import styled from 'styled-components';
import { AsidePanel } from "../components/AsidePanel/AsidePanel";
import { MainPanel } from "../components/MainPanel/MainPanel";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import { CartPage } from "../views/CartPage/CartPage";

export const ContentContainer = styled('div')`
	display: flex;
`;

export const MainRouting = () => {
	const getAuthorisedState = useSelector( (state: RootState) => state);
	const isAuthorized = getAuthorisedState.userReducer.isAuthorized;

	return(
		<BrowserRouter>

				<TopMenu isAuthorized={isAuthorized}/>

				<ContentContainer>
					<AsidePanel />

					<Route exact path="/" component={MainPanel}/>
					<Route path="/public" component={Public}/>
					<Route path="/login" component={Login}/>
					<Route path="/cart" component={CartPage}/>
					<Route path="/product/:id" component={ProductDetails}/>
					<Route path="/categories/:category" component={CategoryPanel}/>
					<PrivateRoute path='/protected' component={AdminPage} isAuthorized={isAuthorized}/>

				</ContentContainer>

    	</BrowserRouter>
	)
}