
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { ReactEventHandler } from 'react';
import { Button } from './Button';

export const BoxWrapper = styled('div')`
	box-shadow: -2px 2px 6px 2px rgba(0,0,0,0.10);
	padding: 20px 30px;
	margin: 10px;
	border-radius: 4px;
	display: flex;
    flex-wrap: wrap;
	flex: 0 1 240px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export const TitleProduct = styled('h3')`
	color: ${props => props.theme.blue};
	font-size: 20px;
	margin: 0 0 15px 0;
	text-overflow: ellipsis;
    overflow: hidden;
    width: 240px;
	display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`;

export const ImgWrapper = styled('div')`
	max-width: 160px;
	max-height: 160px;
`;

export const Image = styled('img')`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

interface BoxItemPropsType {
	title: string,
	price: string,
	image: string,
	key: number,
	id: number
}

export const BoxItem = ({id, title, image, price}: BoxItemPropsType) => {
	let history = useHistory();

	const handleRedirect = () => {
		history.push(`/product/${id}`);
	}

	const handleClick = () => {

		console.log('add')
	}

	return(
		<BoxWrapper onClick={handleRedirect}>
			<TitleProduct>{title}</TitleProduct>
			<ImgWrapper>
				<Image alt={title} src={image} />
			</ImgWrapper>
			<p>{price} $</p>
			
		</BoxWrapper>
	)
}