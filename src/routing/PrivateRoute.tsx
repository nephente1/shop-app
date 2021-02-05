import {BrowserRouter, Route, Switch, Redirect, RouteProps} from "react-router-dom";


type PrivateRouteProps = {
	path: RouteProps['path'],
	component: React.ElementType,
	isAuthorized: boolean
};


const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component: Component, isAuthorized, ...routeProps }) => (

	<Route {...routeProps} render={(props) => (
		isAuthorized !== false
			? <Component {...props} />
			: <Redirect to='/login' />
		)} />
  )

  export default PrivateRoute
