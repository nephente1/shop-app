import axios from 'axios';
import Cookies from 'js-cookie';

// https://api.jsonapi.co/rest/v1/user/login

export const adminInstance = axios.create({
	baseURL: "https://fakestoreapi.com"
})


const token = Cookies.get('accessToken');

export const instance = axios.create({
	baseURL: 'https://fakestoreapi.com',
	headers: {'xxx-Authorization': 'Bearer '+ token}
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


export const updateToken = (token: string) => {
	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};