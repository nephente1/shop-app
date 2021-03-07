
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { PageContainer } from '../MainStyles';
import { ItemsPage } from './ItemsPage';
import styled from 'styled-components';
import { StatisticsPage } from './StatisticsPage';

export const Nav = styled('nav')`
	display: flex;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	padding: 8px 10px;
	margin: 0 10px 0 0;
	background: ${props => props.theme.blue};
	color: white;
	line-height: 1;
	&:last-of-type {
		margin: 0;
	}
`;


// Create a client
const queryClient = new QueryClient();

export const AdminPage = () => {

	return (

		<QueryClientProvider client={queryClient}>
			<PageContainer>
				<Nav>
					<LinkItem to="/admin/items">Items</LinkItem>
					<LinkItem to="/admin/statistics">statistics</LinkItem>
				</Nav>

				<Switch>
					<Route exact path="/admin/items" component={ItemsPage}/>
					<Route path="/admin/statistics" component={StatisticsPage}/>
				</Switch>

			</PageContainer>
		</QueryClientProvider>

	);
};
