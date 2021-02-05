
import styled from 'styled-components';

export const BoxWrapper = styled('div')`
	box-shadow: -2px 2px 6px 2px rgba(0,0,0,0.10);
	padding: 20px 30px;
	margin: 10px;
	border-radius: 4px;
	display: flex;
    flex-wrap: wrap;
	flex: 0 1 200px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

`;

export const TitleProduct = styled('h3')`
	color: ${props => props.theme.blue};
	font-size: 20px;
	margin: 0;
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
	category: string,
	image: string,
	key: number
}

export const BoxItem = (props: BoxItemPropsType) => {
	return(
		<BoxWrapper>
			<TitleProduct>{props.title}</TitleProduct>
			<p>{props.category}</p>
			<ImgWrapper>
				<Image alt={props.title} src={props.image} />
			</ImgWrapper>

			<p>{props.price}</p>

		</BoxWrapper>
	)
}