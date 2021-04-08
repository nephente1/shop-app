
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
		const abortController = new AbortController();
		getAllProductsFunc();

		return () => {
			abortController.abort(); //clean from possible leak up memory
		};
	}, [getAllProductsFunc]);


	const productsList = React.useCallback( () => {
		return products?.data.map( (el: any) => <ProductElement key={el.id} productData={el}/>);
	}, [products]);

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
