import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	userLoginReducer,
	userRegisterReducer,
} from '../redux/reducers/userReducers';
import {
	transactionListReducer,
	deleteTransactionReducer,
	createTransactionReducer,
} from '../redux/reducers/transactionReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	transactionList: transactionListReducer,
	deleteTransaction: deleteTransactionReducer,
	createTransaction: createTransactionReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	transactionList: { transactions: [] },
};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
