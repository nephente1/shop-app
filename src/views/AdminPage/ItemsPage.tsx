
import React from 'react';
import { AxiosResponse } from 'axios';
import { Spinner } from '../../components/Spinner.styles';
import { ProductElement } from './ProductElement';
import { ProductData } from '../ProductDetails/ProductDetails';
import { getAllProducts } from './API';


export const ItemsPage = () => {

	const [products, setProducts] = React.useState<AxiosResponse<Array<ProductData>>>();
	const [isLoading, setLoading] = React.useState(true);

	const getAllProductsFunc = React.useCallback(async (): Promise<any> => {
		const resp = await getAllProducts();
		setProducts(resp);
		setLoading(false);
	}, []);

	React.useEffect( () => {
		getAllProductsFunc();
	}, [getAllProductsFunc]);


	const productsList = React.useCallback( () => {
		return products?.data.map( (el: any) => <ProductElement key={el.id} productData={el}/>);
	}, [products]);


	console.log('products', products);
	return (
		<>
		{ isLoading ? <Spinner /> :
			<>
				<h2>Admin Page</h2>
				<h4>Items to remove</h4>
				{productsList()}
			</>
		}
		</>
	);
};
