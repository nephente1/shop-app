import axios from 'axios';
import { instance, updateToken } from './axios';
import Cookies from 'js-cookie';




export const getAllProducts = async() => {
	const token = Cookies.get('accessToken');
	try {
		const resp = await instance.get("/products?limit=10");
		console.log('çook', Cookies.get('accessToken'))
		// const token = Cookies.get('accessToken');
		updateToken('xxx');
		console.log('resp', resp);
	}
	catch (error){
		console.log(error);
	}
}



