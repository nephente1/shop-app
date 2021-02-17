

import { combineReducers } from 'redux';
import { cartReducer } from './cartStore';
import { userReducer } from './userStore';
// import { counterReducer } from './components/counterStore';
// import { postsReducer } from './components/postsStore';
// import { usersReducer } from './components/usersStore';

export const rootReducer = combineReducers({
	userReducer: userReducer,
	cartReducer: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>