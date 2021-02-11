import React from 'react';
import './App.css';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './appState/redux/rootReducer';
import { Container } from './views/MainStyles';

import { ThemeProvider } from 'styled-components';

import { MainRouting } from './routing/MainRouting';

//konfiguracja do chrome redux devtools
//const composeEnchanters = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, compose (
  applyMiddleware(...middleware)
));

console.log('user', store.getState())


const theme = {
	blue: '#1976d2',
	light: '#fafafa',
	lightDark: '#dbdbdb',
	red: '#f50057',
	dark:'#565656'
}


const App = () => {

	return (
		<div className="App">
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Container data-test="Container">
						<MainRouting />
					</Container>
				</ThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
