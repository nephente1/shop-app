/* eslint-disable no-case-declarations */

// import Cookies from 'js-cookie';
import { ProductData } from '../../views/ProductDetails/ProductDetails';

//Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

interface CartStateTypes {
	cartData: Array<ProductData>
}

const INITIAL_STATE: CartStateTypes = {
	cartData: []
};

export interface AddToCartAction {
	type: typeof ADD_TO_CART,
	cartData: ProductData
}

export interface RemoveFromCartAction {
	type: typeof REMOVE_FROM_CART,
	cartRemoveData: ProductData
}


// dispatches actions
export function addToCartSuccess(cartData: ProductData): AddToCartAction {
    return {
		type: ADD_TO_CART,
		cartData: cartData
    };
}

export function removeFromCart(cartData: ProductData): RemoveFromCartAction {
    return {
		type: REMOVE_FROM_CART,
		cartRemoveData: cartData
    };
}

// reducer
export const cartReducer = (state = INITIAL_STATE, action: AddToCartAction | RemoveFromCartAction ) => { //parametry to: aktualny stan i dana akcja
    switch (action.type) {
        case ADD_TO_CART:
			// check if item is inn cart already
			const itemInCart = action.cartData;
			const isItemInCart = state.cartData.find(el => el.id === itemInCart.id ? true : false );

			if (isItemInCart) {
				return {
					...state,
					cartData: state.cartData.map(el => el.id === itemInCart.id ? {...el, amount: el.amount + 1} : el )
				};
			}

			return {
				...state,
				cartData: [...state.cartData, {...itemInCart, amount: 1}]
			};

        case REMOVE_FROM_CART:
			const sameItemInCart = state.cartData.find(el => el.id === action.cartRemoveData.id ? true : false );
			if (sameItemInCart && sameItemInCart.amount > 1) {
				return {
					...state,
					cartData: state.cartData.map(el => el.id === action.cartRemoveData.id ? {...el, amount: el.amount - 1} : el )
				};
			}
			return {...state,
				cartData: state.cartData.filter(item => item.id !== action.cartRemoveData.id)
			};

        default:
            return state;
    }
};
