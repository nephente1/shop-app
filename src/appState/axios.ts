import axios from 'axios';
import Cookies from 'js-cookie';

// https://api.jsonapi.co/rest/v1/user/login
// env-cmd
// dotenv
const { REACT_APP_MY_ENV_KEY, REACT_APP_SHOP_API_URL, REACT_APP_OTHER_API } = process.env;

export const adminInstance = axios.create({
	//baseURL: REACT_APP_OTHER_API
	baseURL: REACT_APP_SHOP_API_URL,
});


// const token = Cookies.get('accessToken');
//const token = '12345';

export const instance = axios.create({
	//baseURL: 'https://fakestoreapi.com/'
	baseURL: REACT_APP_SHOP_API_URL,
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



adminInstance.defaults.headers.common['x-Authorization'] = 'Bearer '+ Cookies.get('accessToken');

