import axios from 'axios';
import { ADD_NOTIFICATION } from '../../constants/alertConstants';
import { v4 } from 'uuid';
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

export const listBooks = (token) => async (dispatch) => {
	try {
		dispatch({
			type: GET_BOOKS_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.get('/api/books', config);

		dispatch({
			type: GET_BOOKS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_BOOKS_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const createBook = (
	title,
	author,
	pages,
	notes,
    token,
	isCurrent,
	currentPage,
) => async (dispatch) => {
	try {
		dispatch({
			type: CREATE_BOOK_REQUEST,
		});

		const body = {
			title,
            author,
            pages,
            notes,
            isCurrent,
            currentPage,
		};

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		await axios.post(`/api/books`, body, config);

		dispatch({
			type: CREATE_BOOK_SUCCESS,
		});

		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: 'Book Created!',
				success: true,
			},
		});
	} catch (error) {
		dispatch({
			type: CREATE_BOOK_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const updateBook = (token, bookId, book) => async (
	dispatch, getState
) => {
	try {
		dispatch({
			type: UPDATE_BOOK_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const updatedBook = await axios.patch(`/api/books/${bookId}`, book, config);

		dispatch({
			type: UPDATE_BOOK_SUCCESS,
		});

		const notificationMessage = !book.isCurrent ? "Great work! Keep up!" : 'Book Updated!';

		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: notificationMessage,
				success: true,
			},
		});

		const found = getState().bookList.books.findIndex(el => el._id === updatedBook._id);
		getState().bookList.books.splice(found, 1, updatedBook)

		dispatch({
			type: GET_BOOKS_SUCCESS,
			payload: getState().bookList.books,
		});

		
	} catch (error) {
		dispatch({
			type: UPDATE_BOOK_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};
