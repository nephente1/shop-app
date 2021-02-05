import styled from 'styled-components';

type Colors = 'blue' | 'red';

interface ButtonColorPropsType {
	buttonColor: Colors,
	onClick: ( event?: React.SyntheticEvent ) => void

}

export const ButtonWrapper = styled('button')<ButtonColorPropsType>`
	display: flex;
	font-size: 16px;
	color: #fff;
	border: none;
	border-radius: 4px;
	padding: 8px 15px;
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
	onClick: ( event?: React.SyntheticEvent ) => void
}

export const Button = (props: ButtonPropsType) => {

	return(
		<ButtonWrapper buttonColor={props.bgColor} onClick={ props.onClick }>
			{props.children}
		</ButtonWrapper>
	)
}