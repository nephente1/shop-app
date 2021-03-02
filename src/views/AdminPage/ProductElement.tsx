import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { ProductData } from '../ProductDetails/ProductDetails';
import { UpdatedProductTypes, updateProduct } from './API';

export const Options = styled('div')`
	width: 200px;
	text-align: center;
	cursor: pointer;
	align-self: center;
	display: flex;
	justify-content: flex-end;
`;

export const ItemElement = styled('div')`
	display: flex;
	flex-wrap: nowrap;
	border-top: 1px solid ${props => props.theme.lightDark};
	justify-content: space-between;
`;

export const InputsWrapper = styled('div')`
	display: flex;

`;

interface ProductElementPropsType {
	productData: ProductData
}

//@ts-ignore
export const ProductElement = (props: ProductElementPropsType) => {

	const updatedProduct: UpdatedProductTypes = {};

	const update = () => {
		updateProduct(props.productData, updatedProduct);
	};

	const deleteProduct = () => {
		console.log('delete', props.productData.id);
	};

	const handleChangeTitle = (e:  React.ChangeEvent<HTMLInputElement>): void => {
		const newTitle = e.target.value;
		updatedProduct.title = newTitle;
	};
	const handleChangePrice = (e:  React.ChangeEvent<HTMLInputElement>): void => {
		const newPrice = e.target.value;
		updatedProduct.price = Number(newPrice);
	};

	return (
		<>
		<ItemElement>
			<p>{props.productData.title}</p>

			<Options>
				<Button onClick={update} bgColor="blue" size="small">Update</Button>
				<Button onClick={deleteProduct} bgColor="blue" size="small">Remove</Button>
			</Options>

		</ItemElement>
		<InputsWrapper>
			<input type="text" onChange={handleChangeTitle} placeholder="set new title"/>
			<input onChange={handleChangePrice} placeholder="set new price"/>
		</InputsWrapper>
		</>
	);
};
