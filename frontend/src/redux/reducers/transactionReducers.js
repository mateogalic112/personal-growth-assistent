import {
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_FAIL,
	DELETE_TRANSACTION_REQUEST,
	DELETE_TRANSACTION_SUCCESS,
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
} from '../../constants/transactionConstants';

export const transactionListReducer = (
	state = { transactions: [] },
	action
) => {
	switch (action.type) {
		case GET_TRANSACTIONS_REQUEST:
			return { loading: true, transactions: [] };
		case GET_TRANSACTIONS_SUCCESS:
			return { loading: false, transactions: action.payload };
		case GET_TRANSACTIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const deleteTransactionReducer = (
	state = { success: null, item: {} },
	action
) => {
	switch (action.type) {
		case DELETE_TRANSACTION_REQUEST:
			return { loading: true };
		case DELETE_TRANSACTION_SUCCESS:
			return {
				loading: false,
			};
		case GET_TRANSACTIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const createTransactionReducer = (state = { success: null }, action) => {
	switch (action.type) {
		case CREATE_TRANSACTION_REQUEST:
			return { loading: true };
		case CREATE_TRANSACTION_SUCCESS:
			return {
				loading: false,
			};
		case GET_TRANSACTIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
