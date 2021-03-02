//import styled from "styled-components";

import { AxiosResponse } from 'axios';
import React from 'react';
import styled from 'styled-components';
import { instance } from '../../appState/axios';
import { SearchIcon } from '../../assets/SearchIcon';
import { ProductData } from '../../views/ProductDetails/ProductDetails';
import { BoxItem } from '../BoxItem';
import { BoxesContainer } from '../MainPanel/MainPanel';


export const SearchInputWrapper = styled('div')`
    position: relative;
    width: 263px;
    display: flex;
    height: 38px;
    padding-left: 49px;
    border: 2px solid #D4D7E1;
    border-radius: 30px;
`;

export const SearchInput = styled('input')`
    width: 80%;
    outline: none;
    border: none;
    &::placeholder {
        color: #A9AEC1;
        size: 14px;
        font-weight: 600;
    }
`;

export const SearchIconWrapper = styled(SearchIcon)`
    position: absolute;
    width: 16px;
    left: 14px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 7px;
    cursor: pointer;
`;

// interface SearchComponentPropsType {
//     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
// }

export const SearchComponent = (): JSX.Element => {

    const [searchWord, setSearchWord] = React.useState<string>('');
    const [results, setResults] = React.useState<AxiosResponse<Array<ProductData>>>();
    const [renderResults, setRenderResults] = React.useState(false);

    const getData = React.useCallback( async () => {
        try {
            const resp = await instance.get('/products');
            setResults(resp);
        }
        catch (error) {
            console.log(error);
        }
    },[]);

    React.useEffect( () => {
        getData();
    }, [getData]);

    const onSearchWord = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchWord(event.currentTarget.value);
        setRenderResults(false);
    };

    const getDataToShow = React.useCallback((): Array<ProductData> | null => {
        if (results) {
            const outFilteredData = results.data.filter((item) => {
                const conditionSearchString = searchWord.length > 0  ? item.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 : true;
                const outData = conditionSearchString;
                return outData;
            });
            return outFilteredData;
        }
        return null;
    }, [searchWord]);

    const searchData = React.useMemo(() => {
        if (getDataToShow()?.length) {
            return getDataToShow()?.map(el => <BoxItem key={el.id} productData={el} id={el.id} title={el.title} price={el.price} image={el.image}/>);
        } else {
            return <p>No products</p>;
        }
    },[]);

    const handleClickSearch = () => {
        console.log('click');
        if (searchWord.length > 1) { setRenderResults(true); }
    };

    console.log('searchData', searchData);

    return (
        <div>
            <SearchInputWrapper onClick={handleClickSearch} >
                <SearchIconWrapper />
                <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={onSearchWord}
                    value={searchWord}
                />
            </SearchInputWrapper>
            { renderResults && <BoxesContainer> {searchData}</BoxesContainer> }
        </div>
    );
};
