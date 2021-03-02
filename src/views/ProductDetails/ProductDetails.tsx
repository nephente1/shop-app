import { AxiosResponse } from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { instance } from '../../appState/axios';
import { Button } from '../../components/Button';
import { RouteComponentProps } from 'react-router';
import { Spinner } from '../../components/Spinner.styles';
import {Column, ColumnText, DetailsContainer, TitleText, Price, Description, ImgWrapper, Image, CategoryTitle} from './ProductDetails.styles';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../appState/redux/rootReducer';
import { AddToCartAction, addToCartSuccess } from '../../appState/redux/cartStore';
import { PageContainer } from '../MainStyles';
import { Dispatch } from 'redux';


type TParams = { id: string };
export interface ProductData {
	title: string,
	price: number,
	description: string,
	category: string,
	image: string,
	id: number,
	amount: number
}

const mapStateToProps = (state: RootState) => {
	return {
		cartData: state.cartReducer.cartData
	};
};

const mapDispatchToProps = (dispatch: (Dispatch<AddToCartAction>) ) => {
    return {
		addToCartSuccess: (data: any) => dispatch(addToCartSuccess(data))
    };
};

// creating types of props from connect
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>


const ProductDetails = (props: PropsFromRedux & RouteComponentProps<TParams>) => {
	const { addToCartSuccess } = props;

	const [product, setProduct] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getProduct = React.useCallback( async () => {
		try {
			const resp = await instance.get(`/products/${props.match.params.id}`);
			setProduct(resp);
			setLoading(false);
		}
		catch (error) {
			console.log(error);
		}
	}, [props.match.params.id]);

	React.useEffect( () =>{
		getProduct();
	}, [getProduct]);


	const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
	};


	if (product?.data === undefined) {
		return null;
	}

    return (
        <PageContainer className="x-PageContainer">
			{loading ? <Spinner /> :
			<>
				<DetailsContainer className="x-DetailsContainer">
					<Column>
						<CategoryTitle>category: {product.data.category}</CategoryTitle>
						<TitleText>{product.data.title}</TitleText>
						<ColumnText>Description:</ColumnText>
						<Description>{product.data.description}</Description>

						<Price>{product.data.price} $</Price>
						<Button bgColor="red" onClick={() => addToCartSuccess(product.data)}>Add to basket</Button>

					</Column>
					<Column>
						<ImgWrapper>
							<Image alt={product.data.title} src={product.data.image} />
						</ImgWrapper>
					</Column>
				</DetailsContainer>
				<Button bgColor="blue" onClick={handleBackClick}>back</Button>
			</>
			}

		</PageContainer>
    );
};

export default connector(ProductDetails);
