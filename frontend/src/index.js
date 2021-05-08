import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import GlobalStyle from './theme/global';
import { QueryClientProvider, QueryClient } from 'react-query';

import store from './redux/store';

const queryClient = new QueryClient();

ReactDOM.render(
	<SpeechProvider appId='7e19a1e3-0e2f-4c70-9143-78af69372f3c' language="en-US">
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<App />
			</QueryClientProvider>
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
