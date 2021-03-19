import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import GlobalStyle from './theme/global';
import { QueryClientProvider, QueryClient } from 'react-query';

import store from './store'

const queryClient = new QueryClient();

ReactDOM.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<App />
		</QueryClientProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
