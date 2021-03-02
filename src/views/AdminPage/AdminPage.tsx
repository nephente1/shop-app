
import React from 'react';
import { AxiosResponse } from 'axios';
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

import { adminInstance } from '../../appState/axios';
import { Spinner } from '../../components/Spinner.styles';
import { ProductElement } from './ProductElement';
import { PageContainer } from '../MainStyles';
import { ProductData } from '../ProductDetails/ProductDetails';
import { ItemsPage } from './ItemsPage';


// Create a client
const queryClient = new QueryClient();

export const AdminPage = () => {

	return (

		<QueryClientProvider client={queryClient}>
			<PageContainer>
			<Link to="/admin/items">Items</Link>
			<Switch>
				{/* <Route exact path="/" component={MainPanel}/> */}
				<Route path="/admin/items" component={ItemsPage}/>
				{/* <Route path="/product/:id" component={ProductDetails}/>
				<Route path="/categories/:category" component={CategoryPanel}/> */}
			</Switch>


			</PageContainer>
		</QueryClientProvider>

	);
};
