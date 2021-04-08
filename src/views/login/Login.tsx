import React, { SetStateAction } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../appState/redux/rootReducer';
import { fetchLogin, UserAuthorizationTypes, userAuthorized, userNonAuthorized } from '../../appState/redux/userStore';
import { Button } from '../../components/Button';
import { LoginWrapper, LoginInput } from './Login.styles';
import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';


const mapStateToProps = (state: RootState) => {
	return {
		isAuthorized: state.userReducer.isAuthorized,
		message: state.userReducer.message,
		isLoading: state.userReducer.isLoading,
		isError: state.userReducer.isError,
		data: state.userReducer.data
	};
};

const mapDispatchToProps = (dispatch: (Dispatch<UserAuthorizationTypes>)) => {
	return {
		//userAuthorized: () => dispatch( userAuthorized('zalogowany') ),
		userNonAuthorized: () => dispatch( userNonAuthorized('wylogowany') ),
//@ts-ignore
		fetchLogin: (x: string, y: string) => dispatch(fetchLogin(x ,y))
	};
};

// creating types of props from connect
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>


const Login = (props: PropsFromRedux) => {
	const history = useHistory();
	const {fetchLogin, userNonAuthorized} = props;
	const [authorized, setAuthorized] = React.useState<SetStateAction<boolean | null>>(null);
	const [login, setLogin] = React.useState('eve.holt@reqres.in');
	const [pass, setPass] = React.useState('cityslicka');

	const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(e.target.value);
	};

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPass(e.target.value);
	};

	const loginUser = async () => {
	//	if (login === 'admin' && pass === 'admin') {
			await fetchLogin(login, pass); //wait until fetch is done
			// userAuthorized(); //to remove after working login api
			//setAuthorized(true); //to remove after working login api
			history.push('/admin'); //when fetch is done then route to admin
	//	} else {
		//	setAuthorized(false);
	//	}
	};

	const loginOutUser = () => {
		userNonAuthorized();
		setAuthorized(null);
		setLogin('');
		setPass('');
		Cookies.remove('accessToken');
	};

	return (
		<LoginWrapper>
			<div>Login to admin</div>
			<LoginInput type="text" placeholder="login" onChange={handleLogin} value={login} />
			<LoginInput type="text" placeholder="password" onChange={handlePassword} value={pass}/>
			{authorized === false ? <div>podaj poprawne dane do zalogowania</div> : null}
			<Button bgColor="blue" onClick={ loginUser }>Login</Button>
			<Button bgColor="red" onClick={ loginOutUser }>Non authorized</Button>
			<p style={{color: 'black'}}>{props.message}</p>
		</LoginWrapper>
	);
};

export default connector(Login);
