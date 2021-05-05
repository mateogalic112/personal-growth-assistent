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

import {
	bookListReducer,
	createBookReducer,
	updateBookReducer,
} from '../redux/reducers/bookReducers';

import {
	goalListReducer,
	createGoalReducer,
	updateGoalReducer,
	deleteGoalReducer
} from '../redux/reducers/goalReducers'

import { notificationListReducer } from '../redux/reducers/alertReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	transactionList: transactionListReducer,
	deleteTransaction: deleteTransactionReducer,
	createTransaction: createTransactionReducer,
	notificationList: notificationListReducer,
	bookList: bookListReducer,
	createBook: createBookReducer,
	updateBook: updateBookReducer,
	goalList: goalListReducer,
	createGoal: createGoalReducer,
	updateGoal: updateGoalReducer,
	deleteGoal: deleteGoalReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	transactionList: { transactions: [] },
	notificationList: { notifications: [] },
	bookList: { books: [] },
	goalList: { goals: [] }
};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
