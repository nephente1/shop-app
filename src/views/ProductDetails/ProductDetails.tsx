import { AxiosResponse } from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { instance } from '../../appState/axios';
import { Button } from '../../components/Button';
import { RouteComponentProps } from 'react-router';
import { Spinner } from '../../components/Spinner.styles';
import {Column, ColumnText, DetailsContainer, TitleText, Price, Description, ImgWrapper, Image} from "./ProductDetails.styles";


type TParams = { id: string };

export const ProductDetails = ({match}: RouteComponentProps<TParams>) => {

	const [product, setProduct] = React.useState<AxiosResponse<any>>();
	const [loading, setLoading] = React.useState(true);

	const getProduct = React.useCallback( async() => {
		try {
			const resp = await instance.get(`/products/${match.params.id}`);
			setProduct(resp);
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
        history.push("/");
    }

    return(
        <>
			{loading ? <Spinner /> :
				<DetailsContainer>
					<Column>
						<Description>Product category: {product?.data.category}</Description>
						<TitleText>{product?.data.title}</TitleText>
						<ColumnText>Description:</ColumnText>
						<Description>{product?.data.description}</Description>

						<Price>{product?.data.price} $</Price>
						<Button bgColor='red' onClick={() => console.log('kup')}>BUY</Button>

					</Column>
					<Column>
						<ImgWrapper>
							<Image alt={product?.data.title} src={product?.data.image} />
						</ImgWrapper>
					</Column>
				</DetailsContainer>
			}
            <Button bgColor='blue' onClick={handleBackClick}>back</Button>
        </>
    )
};
