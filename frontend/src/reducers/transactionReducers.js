import {
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_FAIL,
} from '../constants/transactionConstants';

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
