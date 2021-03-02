import styled from 'styled-components';
import React from 'react';
import { ProductList } from './ProductsList';
import { PageContainer } from '../../views/MainStyles';
import { SearchComponent } from '../SearchComponent/SearchComponent';

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

export const MainPanel = (): JSX.Element => {
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
