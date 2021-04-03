import axios from 'axios';

import {
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_FAIL,
	DELETE_TRANSACTION_REQUEST,
	DELETE_TRANSACTION_SUCCESS,
	DELETE_TRANSACTION_FAIL,
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
	CREATE_TRANSACTION_FAIL,
} from '../../constants/transactionConstants';

export const listTransactions = (token) => async (dispatch) => {
	try {
		dispatch({
			type: GET_TRANSACTIONS_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.get('/api/transactions', config);

		dispatch({
			type: GET_TRANSACTIONS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TRANSACTIONS_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const deleteTransaction = (token, transactionId) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: DELETE_TRANSACTION_REQUEST,
			payload: { itemId: transactionId },
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.delete(
			`/api/transactions/${transactionId}`,
			config
		);

		dispatch({
			type: DELETE_TRANSACTION_SUCCESS,
			payload: { success: !!data },
		});

		dispatch({
			type: GET_TRANSACTIONS_SUCCESS,
			payload: getState().transactionList.transactions.filter(
				(item) => item._id !== transactionId
			),
		});
	} catch (error) {
		dispatch({
			type: DELETE_TRANSACTION_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const createTransaction = (name, type, amount, date, token) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: CREATE_TRANSACTION_REQUEST,
		});

		const body = {
			name,
			type,
			amount,
			date,
		};

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.post(`/api/transactions`, body, config);

		dispatch({
			type: CREATE_TRANSACTION_SUCCESS,
			payload: { success: !!data },
		});

		dispatch({
			type: GET_TRANSACTIONS_SUCCESS,
			payload: [...getState().transactionList.transactions, data],
		});
	} catch (error) {
		dispatch({
			type: CREATE_TRANSACTION_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};
