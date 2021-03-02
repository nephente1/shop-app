import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';


type PrivateRouteProps = {
	path: RouteProps['path'],
	component: React.ElementType,
	isAuthorized: boolean
};

const Component = <></>;

// eslint-disable-next-line react/prop-types
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component: Component, isAuthorized, ...routeProps }) => (

	<Route {...routeProps}
		render={ (props) => ( isAuthorized !== false ?
		<Component {...props} /> :
		<Redirect to="/login" /> ) }
	/>
  );

  export default PrivateRoute;
