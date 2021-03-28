import axios from 'axios';

import {
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_FAIL,
} from '../constants/transactionConstants';

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
