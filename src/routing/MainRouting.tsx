import React from "react";
import {BrowserRouter, Route, Link, Switch, Redirect, useHistory} from "react-router-dom";
import MainPage from "../views/MainPage";
import { Protected } from "../views/Protected";
import { Public } from "../views/Public";
import Login from "../views/login/Login";
import PrivateRoute from "./PrivateRoute";

import { useSelector } from 'react-redux';
import { RootState } from '../appState/redux/rootReducer';
import { TopMenu } from "../components/TopMenu";

export const MainRouting = () => {
	const getAuthorisedState = useSelector( (state: RootState) => state);
	const isAuthorized = getAuthorisedState.userReducer.isAuthorized;

	return(
		<BrowserRouter>

				<TopMenu isAuthorized={isAuthorized}/>


				<Route path="/main" component={MainPage}/>
				<Route path="/public" component={Public}/>
				<Route path="/login" component={Login}/>
				<PrivateRoute path='/protected' component={Protected} isAuthorized={isAuthorized}/>

    	</BrowserRouter>
	)
}