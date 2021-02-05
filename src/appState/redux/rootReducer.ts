

import { combineReducers } from 'redux';
import { userReducer } from './userStore';
// import { counterReducer } from './components/counterStore';
// import { postsReducer } from './components/postsStore';
// import { usersReducer } from './components/usersStore';

export const rootReducer = combineReducers({
	userReducer: userReducer
})

export type RootState = ReturnType<typeof rootReducer>