import styled from 'styled-components';

export const LoginWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
    max-width: 300px;
    margin: auto;
	padding: 25px;
	box-shadow: -2px 2px 6px 2px rgb(0 0 0 / 10%);
`;

export const LoginInput = styled('input')`
	margin: 5px 0;
	padding: 8px 15px;
	border: 1px solid ${props => props.theme.lightDark};
	font-size: 16px;
	&:last-of-type{
		margin: 5px 0 15px 0;
	}
`;
