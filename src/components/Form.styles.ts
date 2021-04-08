import styled from 'styled-components';
import {Field, Form} from 'formik';

export const FormWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
    max-width: 300px;
    margin: auto;
	padding: 25px;
	box-shadow: -2px 2px 6px 2px rgb(0 0 0 / 10%);
    border-radius: 4px;
`;

export const FormInput = styled(Field)`
	margin: 5px 0;
	padding: 8px 15px;
	border: 1px solid ${props => props.theme.lightDark};
	font-size: 16px;
    border-radius: 4px;
	&:last-of-type{
		margin: 5px 0 15px 0;
	}
`;

export const FormLabel = styled('label')`
    font-weight: bold;
    display: flex;
    margin-bottom: 2px;
`;

export const ErrorLabel = styled('div')`
	color: red;
	margin: 5px 0;
`;
