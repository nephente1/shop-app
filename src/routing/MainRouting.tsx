import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
// import MainPage from "../views/MainPage";
import { AdminPage } from '../views/AdminPage/AdminPage';
import { Public } from '../views/Public';
import Login from '../views/login/Login';
import PrivateRoute from './PrivateRoute';

import { useSelector } from 'react-redux';
import { RootState } from '../appState/redux/rootReducer';
import { TopMenu } from '../components/TopMenu';

import { CategoryPanel } from '../components/CategoryPanel/CategoryPanel';
import styled from 'styled-components';
import { AsidePanel } from '../components/AsidePanel/AsidePanel';
import { MainPage } from '../views/MainPage/MainPage';
import ProductDetails from '../views/ProductDetails/ProductDetails';
import { CartPage } from '../views/CartPage/CartPage';
import Cookies from 'js-cookie';

export const ContentContainer = styled('div')`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 600px){
        flex-direction: row;

    }
`;

export const MainRouting = () => {
    const getAuthorisedState = useSelector( (state: RootState) => state);
    // const isAuthorized = React.useMemo( () => getAuthorisedState.userReducer.isAuthorized, [getAuthorisedState.userReducer.isAuthorized] );
    const isAuthorized = getAuthorisedState.userReducer.isAuthorized;
    console.log('isAuthorized', isAuthorized, Cookies.get('accessToken'));

    return (
        <BrowserRouter>

            <TopMenu isAuthorized={isAuthorized}/>

                <ContentContainer>
                    <AsidePanel />

                    <Route exact path="/" component={MainPage}/>
                    <Route path="/public" component={Public}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/product/:id" component={ProductDetails}/>
                    <Route path="/categories/:category" component={CategoryPanel}/>
                    <PrivateRoute path="/admin" component={AdminPage} isAuthorized={isAuthorized}/>

                </ContentContainer>

        </BrowserRouter>
    );
};
