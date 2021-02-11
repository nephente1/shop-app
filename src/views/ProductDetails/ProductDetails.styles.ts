import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const DetailsContainer = styled('div')`
    color: #edeff1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    font-size: 12px;

    @media(max-width: 600px){
        flex-direction: column;
        font-size: 16px;
    }
`;

export const Column = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:last-of-type{
        margin: 0 20px;
    }
    @media(max-width: 600px){
        margin-bottom: 15px;
    }
`;

export const ColumnText = styled ('p')`
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
	text-decoration: underline;
	color: ${props => props.theme.dark};
`;

export const Description = styled('p')`
	font-size: 18px;
	color: ${props => props.theme.dark};
`;

export const Price = styled('h3')`
	font-size: 20px;
	color: ${props => props.theme.red};
`;


export const TitleText = styled('h2')`
    font-size: 22px;
    margin-top: 16px;
    margin-bottom: 12px;
    letter-spacing: 1px;
    color: #d5d5d5;
    text-transform: capitalize;
    cursor: pointer;
    color: ${props => props.theme.blue};
`;

export const ImgWrapper = styled('div')`
	max-width: 400px;
	max-height: 400px;
`;

export const Image = styled('img')`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;