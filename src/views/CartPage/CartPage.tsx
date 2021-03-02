import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RemoveFromCartAction, removeFromCart } from '../../appState/redux/cartStore';
import { RootState } from '../../appState/redux/rootReducer';
import { Button } from '../../components/Button';
import { ProductData } from '../../views/ProductDetails/ProductDetails';
import { PageContainer } from '../MainStyles';
import styled from 'styled-components';
import { Dispatch } from 'redux';

export const CartItem = styled('div')`
    display: flex;
    flex-wrap: nowrap;
    border-top: 1px solid ${props => props.theme.lightDark};
    width: 100%;
`;

export const ItemName = styled('p')`
    flex: 1 1 300px;
    white-space: wrap;
    text-align: left;
`;

export const ItemAmount = styled('p')`
    width: 100px;
`;

export const ItemPrice = styled('p')`
    width: 70px;
`;
export const RemoveOption = styled('p')`
    width: 100px;
    text-align: center;
    cursor: pointer;
`;

type CartPanelItemsPropsType = Pick<ProductData, 'id' | 'title' | 'amount' | 'price'> ;


const mapStateToProps = (state: RootState) => {
    return {
        cartData: state.cartReducer.cartData
    };
};

const mapDispatchToProps = (dispatch: (Dispatch<RemoveFromCartAction>) ) => {
    return {
        removeFromCart: (data: any) => dispatch(removeFromCart(data))
    };
};

// creating types of props from connect
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>



export const CartPage = connect(mapStateToProps, mapDispatchToProps)((props: PropsFromRedux) => {

    const cartItems = props.cartData;

    const getTotalCost = React.useMemo(() => {
        return cartItems.reduce((result, item) => item.amount * item.price + result, 0).toFixed(2);
    }, [cartItems]);

    const itemsPrice = (a: number, b: number) => a * b;

    const renderCart = React.useMemo(() => {
        return cartItems.map((el: CartPanelItemsPropsType) =>
            <CartItem key={el.id}>
                <ItemName>{el.title}</ItemName>
                <ItemAmount>{el.amount} pcs.</ItemAmount>
                <ItemPrice>{itemsPrice(el.price, el.amount)} $</ItemPrice>
                <RemoveOption onClick={() => props.removeFromCart(el)}>X</RemoveOption>
            </CartItem>
        );
    },[props, cartItems]);

    const history = useHistory();
    const cartRedirection = () => {
        history.push('/cart');
    };

    return (
        <PageContainer>
            <h3>Full Cart</h3>
            <CartItem>
                <ItemName>Product name</ItemName>
                <ItemAmount>Amount</ItemAmount>
                <ItemPrice>Price</ItemPrice>
                <RemoveOption>Remove</RemoveOption>
            </CartItem>
            { cartItems.length ?
                <>
                    {renderCart}
                    <CartItem>
                        <ItemName><b>Sum up value:</b></ItemName>
                        <ItemAmount/>
                        <ItemPrice><b>{getTotalCost} $</b></ItemPrice>
                        <RemoveOption/>
                    </CartItem>
                    <Button onClick={cartRedirection} size="small" bgColor="blue">Finalize order</Button>
                </> :
                <p>Basket is empty, add something to cart</p>
            }

        </PageContainer>
    );
});
