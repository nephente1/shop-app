import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../views/MainPage";
import { AdminPage } from "../views/AdminPage";
import { Public } from "../views/Public";
import Login from "../views/login/Login";
import PrivateRoute from "./PrivateRoute";

import { useSelector } from 'react-redux';
import { RootState } from '../appState/redux/rootReducer';
import { TopMenu } from "../components/TopMenu";
import { ProductDetails } from "../views/ProductDetails/ProductDetails";

export const MainRouting = () => {
	const getAuthorisedState = useSelector( (state: RootState) => state);
	const isAuthorized = getAuthorisedState.userReducer.isAuthorized;

	return(
		<BrowserRouter>

				<TopMenu isAuthorized={isAuthorized}/>

				<Route exact path="/" component={MainPage}/>
				<Route path="/public" component={Public}/>
				<Route path="/login" component={Login}/>
				<Route path="/product/:id" component={ProductDetails}/>
				<PrivateRoute path='/protected' component={AdminPage} isAuthorized={isAuthorized}/>

    	</BrowserRouter>
	)
}