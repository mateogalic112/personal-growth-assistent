import {
	GET_BOOKS_REQUEST,
	GET_BOOKS_SUCCESS,
	GET_BOOKS_FAIL,
	UPDATE_BOOK_REQUEST,
	UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL,
	CREATE_BOOK_REQUEST,
	CREATE_BOOK_SUCCESS,
    CREATE_BOOK_FAIL,
} from '../../constants/bookConstants';

export const bookListReducer = (
	state = { books: [] },
	action
) => {
	switch (action.type) {
		case GET_BOOKS_REQUEST:
			return { loading: true, books: [] };
		case GET_BOOKS_SUCCESS:
			return { loading: false, books: action.payload };
		case GET_BOOKS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const createBookReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_BOOK_REQUEST:
			return { loading: true };
		case CREATE_BOOK_SUCCESS:
			return {
				loading: false,
                success: true
			};
		case CREATE_BOOK_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};


export const updateBookReducer = (
	state = {},
	action
) => {
	switch (action.type) {
		case UPDATE_BOOK_REQUEST:
			return { loading: true };
		case UPDATE_BOOK_SUCCESS:
			return {
				loading: false,
                success: true,
			};
		case UPDATE_BOOK_FAIL:
			return { loading: false, success: false,  error: action.payload };
		default:
			return state;
	}
};