import styled from 'styled-components';
import React from 'react';
import { ProductList } from '../../components/ProductsList';
import { PageContainer } from '../MainStyles';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';


export const BoxesContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MainTitle = styled('h2')`
    font-size: 22px;
    color: ${props => props.theme.dark};
    &:hover {
        color: ${props => props.theme.blue};
    }
`;

export const MainPage = (): JSX.Element => {

    return (
        <>
            <PageContainer>
                <SearchComponent />
                <MainTitle>Welcome to nice shop, checkout our products :</MainTitle>
                <ProductList />
            </PageContainer>
        </>
    );
};
