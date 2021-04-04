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

import { notificationListReducer } from '../redux/reducers/alertReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	transactionList: transactionListReducer,
	deleteTransaction: deleteTransactionReducer,
	createTransaction: createTransactionReducer,
	notificationList: notificationListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	transactionList: { transactions: [] },
	notificationList: { notifications: [] },
};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
