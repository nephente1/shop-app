import { AxiosResponse } from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { instance } from '../../appState/axios';
import { Button } from '../../components/Button';
import { RouteComponentProps } from 'react-router';
import { Spinner } from '../../components/Spinner.styles';
import {Column, ColumnText, DetailsContainer, TitleText, Price, Description, ImgWrapper, Image, ContentContainer, CategoryTitle} from "./ProductDetails.styles";
import { isTemplateExpression } from 'typescript';


type TParams = { id: string };
interface ProductData {
	title: string,
	price: string,
	description: string,
	category: string,
	image: string,
	id: string | number,
	amount: number
}

export const ProductDetails = ({match}: RouteComponentProps<TParams>) => {

	const [product, setProduct] = React.useState<AxiosResponse<ProductData>>();
	const [loading, setLoading] = React.useState(true);
	const [cartItems, setBasket] = React.useState([] as ProductData[]);
	//const basket: Array<any> = [];

	//const {title, description, price, category, image} = product?.data;

	const getProduct = React.useCallback( async() => {
		try {
			const resp = await instance.get(`/products/${match.params.id}`);
			setProduct(resp);

			console.log('resp', resp)
			setLoading(false);
		}
		catch (error){
			console.log(error);
		}
	}, [match.params.id]);

	React.useEffect( () =>{
		getProduct();
	}, [getProduct])


	let history = useHistory();
    const handleBackClick = () => {
        history.goBack();
	}

	const addToBasket = (clickedItem: ProductData) => {
		setBasket( prev => {
			const isItemInCart = prev.find(el => el.id === clickedItem.id);

			if (isItemInCart) {
				return prev.map(el => el.id === clickedItem.id ? {...el, amount: el.amount + 1} : el )
			}

			return [...prev, {...clickedItem, amount: 1}];
		})
	}

	console.log('basket', cartItems, typeof product, typeof cartItems);
	if(product?.data === undefined) {
		return null;
	}

    return(
        <><ContentContainer>
			{loading ? <Spinner /> :
			<>
				<DetailsContainer>
					<Column>
						<CategoryTitle>category: {product.data.category}</CategoryTitle>
						<TitleText>{product.data.title}</TitleText>
						<ColumnText>Description:</ColumnText>
						<Description>{product.data.description}</Description>

						<Price>{product.data.price} $</Price>
						<Button bgColor='red' onClick={() => addToBasket(product.data)}>Add to basket</Button>

					</Column>
					<Column>
						<ImgWrapper>
							<Image alt={product.data.title} src={product.data.image} />
						</ImgWrapper>
					</Column>
				</DetailsContainer>
				<Button bgColor='blue' onClick={handleBackClick}>back</Button>
			</>
			}

			</ContentContainer>
        </>
    )
};
