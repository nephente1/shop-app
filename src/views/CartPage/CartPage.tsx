import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RemoveFromCartAction, removeFromCart, addToCartSuccess, AddToCartAction, removeAllPiecesFromCart, RemoveAllPiecesFromCartAction } from '../../appState/redux/cartStore';
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
    &:first-of-type {
        font-weight: 700;
    }
`;

export const ItemName = styled('p')`
    flex: 1 1 300px;
    white-space: wrap;
    text-align: left;
`;

export const ItemAmount = styled('p')`
    width: 140px;
    text-align: center;
`;

export const ItemPrice = styled('p')`
    width: 120px;
    text-align: center;
`;
export const RemoveOption = styled('p')`
    width: 100px;
    text-align: center;
    cursor: pointer;
`;

// type CartPanelItemsPropsType = Pick<ProductData, 'id' | 'title' | 'amount' | 'price'> ;


const mapStateToProps = (state: RootState) => {
    return {
        cartData: state.cartReducer.cartData
    };
};

const mapDispatchToProps = (dispatch: (Dispatch<RemoveFromCartAction | AddToCartAction | RemoveAllPiecesFromCartAction>) ) => {
    return {
        removeFromCart: (data: ProductData) => dispatch(removeFromCart(data)),
        addToCartSuccess: (data: ProductData) => dispatch(addToCartSuccess(data)),
        removeAllPiecesFromCart: (data: ProductData) => dispatch(removeAllPiecesFromCart(data))
    };
};

// creating types of props from connect
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>



export const CartPage = connect(mapStateToProps, mapDispatchToProps)((props: PropsFromRedux) => {

    const cartItems = props.cartData;
    const {addToCartSuccess, removeFromCart, removeAllPiecesFromCart} = props;

    const getTotalCost = React.useMemo(() => {
        return cartItems.reduce((result, item) => item.amount * item.price + result, 0).toFixed(2);
    }, [cartItems]);

    const itemsPrice = (a: number, b: number) => a * b;

    // <button onClick={() => addToCartSuccess(el)}>+</button><button onClick={removePiece(el.amount)}>-</button>

    const renderCart = React.useMemo(() => {
        return cartItems.map((el: ProductData) =>
            <CartItem key={el.id}>
                <ItemName>{el.title}</ItemName>
                <ItemAmount>{el.amount} pcs. <button onClick={() => addToCartSuccess(el)}>+</button><button onClick={() => removeFromCart(el)}>-</button></ItemAmount>
                <ItemPrice>{itemsPrice(el.price, el.amount)} $</ItemPrice>
                <RemoveOption onClick={() => removeAllPiecesFromCart(el)}>X</RemoveOption>
            </CartItem>
        );
    },[props, cartItems]);

    const history = useHistory();
    const cartRedirection = () => {
        history.push('/cart');
        alert('Thanks for buying!');
    };

    console.log('el', cartItems);

    return (
        <PageContainer>
            <h3>Full Cart</h3>
            <CartItem>
                <ItemName>Product name</ItemName>
                <ItemAmount>Amount</ItemAmount>
                <ItemPrice>Price</ItemPrice>
                <RemoveOption>Remove item</RemoveOption>
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
