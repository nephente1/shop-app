import styled from 'styled-components';

type Colors = 'blue' | 'red';
type Sizes = 'small' | 'large'

interface ButtonColorPropsType {
	buttonColor: Colors,
	onClick: ( event?: React.SyntheticEvent ) => void,
	size?: Sizes
}

export const ButtonWrapper = styled('button')<ButtonColorPropsType>`
	display: flex;
	font-size: ${props => props.size === 'small' ? '12px' : '16px' };
	color: #fff;
	border: none;
	border-radius: 4px;
	padding: ${props => props.size === 'small' ? '5px 10px' : '8px 15px'};
	width: fit-content;
	cursor: pointer;
	outline: none;
	margin: 5px;
	background: ${props => props.buttonColor === 'blue' ? props.theme.blue : props.buttonColor === 'red' ? props.theme.red : props.theme.lightDark};
	&:hover {
		background: ${props => props.buttonColor === 'blue' ? '#0a58a7' : props.buttonColor === 'red' ? '#bb0546' : props.theme.lightDark};
	}
`;

interface ButtonPropsType {
	bgColor: Colors,
	children: React.ReactNode,
	onClick: ( event?: React.SyntheticEvent ) => void,
	size?: Sizes,
}

export const Button = (props: ButtonPropsType) => {
	return(
		<ButtonWrapper buttonColor={props.bgColor} onClick={ props.onClick } size={props.size}>
			{props.children}
		</ButtonWrapper>
	)
}