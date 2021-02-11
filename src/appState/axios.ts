import axios from 'axios';
import Cookies from 'js-cookie';

// https://api.jsonapi.co/rest/v1/user/login

export const adminInstance = axios.create({
	baseURL: "https://fakestoreapi.com"
})


// const token = Cookies.get('accessToken');
//const token = '12345';

export const instance = axios.create({

	baseURL: 'https://fakestoreapi.com',
	// headers: {'xxx-Authorization': 'Bearer '+ Cookies.get('accessToken')}
  });


// axios.interceptors.request.use(
// 	config => {
// 		config.headers.authorization = `Bearer ${token}`;
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error)
// 	}
// )


//export const updateToken = (token: string) => {
	instance.defaults.headers.common['x-Authorization'] = `Bearer `+ Cookies.get('accessToken');
//};