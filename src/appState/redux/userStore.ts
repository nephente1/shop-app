
import Cookies from 'js-cookie';
//import { updateToken } from '../axios';

//Action creator
const USER_AUTHORIZED = 'USER_AUTHORIZED';
const USER_NON_AUTHORIZED = 'USER_NON_AUTHORIZED';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';

interface UserAuthorizedAction {
	type: typeof USER_AUTHORIZED,
	payload: string
}
interface UserNonAuthorizedAction {
	type: typeof USER_NON_AUTHORIZED,
	payload: string
}

interface UserLogin {
	type: typeof USER_LOGIN,
	login: string,
	password: string
}
interface UserLoginSuccess {
	type: typeof USER_LOGIN_SUCCESS,
	payload: any
}

interface UserLoginError {
	type: typeof USER_LOGIN_ERROR
}


// assuming all actions interfaces in one type:
export type UserAuthorizationTypes = UserAuthorizedAction | UserNonAuthorizedAction | UserLogin | UserLoginSuccess | UserLoginError;


export function userAuthorized(payload: string): UserAuthorizedAction {
    return {
		type: USER_AUTHORIZED,
		payload: payload
    };
}

export function userNonAuthorized(payload: string): UserNonAuthorizedAction {
    return {
        type: USER_NON_AUTHORIZED,
		payload: payload
    };
}

export function fetchLoginRequest(login: string, password: string): UserLogin {
    return {
		type: USER_LOGIN, //type is required
		login: login,
		password: password
    };
}
export function fetchLoginSuccess(data: any): UserLoginSuccess {
    return {
		type: USER_LOGIN_SUCCESS, //type is required
		payload: data
    };
}
export function fetchLoginError(): UserLoginError |Promise<void>  {
    return {
        type: USER_LOGIN_ERROR, //type is required
    };
}

//fetch login request:
export const fetchLogin = (login: string, password: string)  => {
    return async (dispatch: any): Promise<void> => {
        dispatch( fetchLoginRequest(login, password) );
        // try {
		// 	const response = await fetch('https://api.jsonapi.co/rest/v1/user/login', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Accept': 'application/json',
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			email: login,
		// 			password: password,
		// 		})
		// 	})

		// 	const results = await response.json();
			//dispatch( fetchLoginSuccess(results) );
			//const { token } = results.data;

			const token = '123456';
			console.log('token2', token);
			Cookies.set('accessToken', token);
			//updateToken(token); // function add the token to the all axios headers
		};
        // catch(err) {
		// 	console.log('err',err)
        //     return () => dispatch( fetchLoginError() );
        // }
    //}

};

//https://api.jsonapi.co/rest/v1/user/login

//REDUCER dla USERA'A

interface AuthorizedState {
	isAuthorized: boolean,
	message: string,
	data: [],
	isLoading: boolean,
	isError: boolean
}

const INITIAL_STATE: AuthorizedState = {
	isAuthorized: Cookies.get('accessToken') !== undefined,
	message: '',
	isLoading: false,
	isError: false,
	data: []

};


export const userReducer = (state = INITIAL_STATE, action: UserAuthorizationTypes ) => { //parametry to: aktualny stan i dana akcja
    switch (action.type) {
        case USER_AUTHORIZED:
            return {...state, isAuthorized: Cookies.get('accessToken') !== undefined, message: action.payload };
        case USER_NON_AUTHORIZED:
			return {...state, isAuthorized: false, message: action.payload };
			case USER_LOGIN:
            return {...state, isLoading: true, isError: false };
        case USER_LOGIN_SUCCESS:
            return {...state, isLoading: false, data: action.payload, isError: false };
        case USER_LOGIN_ERROR:
            return {...state, isError: true };
        default:
            return state;
    }
};
