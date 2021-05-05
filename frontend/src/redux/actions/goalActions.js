import axios from 'axios';
import { ADD_NOTIFICATION } from '../../constants/alertConstants';
import { v4 } from 'uuid';
import {
	GET_GOALS_REQUEST,
	GET_GOALS_SUCCESS,
	GET_GOALS_FAIL,
	UPDATE_GOAL_REQUEST,
	UPDATE_GOAL_SUCCESS,
    UPDATE_GOAL_FAIL,
	CREATE_GOAL_REQUEST,
	CREATE_GOAL_SUCCESS,
    CREATE_GOAL_FAIL,
    DELETE_GOAL_REQUEST,
    DELETE_GOAL_SUCCESS,
    DELETE_GOAL_FAIL
} from '../../constants/goalConstants';

export const listGoals = (token) => async (dispatch) => {
	try {
		dispatch({
			type: GET_GOALS_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.get('/api/goals', config);

		dispatch({
			type: GET_GOALS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_GOALS_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const createGoal = (
	goal,
    token,
) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CREATE_GOAL_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const {data } = await axios.post(`/api/goals`, goal, config);

		dispatch({
			type: CREATE_GOAL_SUCCESS
		});

		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: 'Goal Created!',
				success: true,
			},
		});

		dispatch({
			type: GET_GOALS_SUCCESS,
			payload: [...getState().goalList.goals, data],
		});

	} catch (error) {
		dispatch({
			type: CREATE_GOAL_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const updateGoal = (token, goalId, goal) => async (
	dispatch, getState
) => {
	try {
		dispatch({
			type: UPDATE_GOAL_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		const { data } = await axios.patch(`/api/goals/${goalId}`, goal, config);

		dispatch({
			type: UPDATE_GOAL_SUCCESS,
		});

		const notificationMessage = data.isCompleted ? "Great work! Keep up!" : 'Try harder!!';

		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: notificationMessage,
				success: true,
			},
		});

		const found = getState().goalList.goals.findIndex(el => el._id === data._id);

		dispatch({
			type: GET_GOALS_SUCCESS,
			payload: [...getState().goalList.goals.slice(0, found), data, ...getState().goalList.goals.slice(found + 1)],
		});

		
	} catch (error) {
		dispatch({
			type: UPDATE_GOAL_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};

export const deleteGoal = (token, goalId) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: DELETE_GOAL_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		};

		await axios.delete(`/api/goals/${goalId}`, config);

		dispatch({
			type: DELETE_GOAL_SUCCESS,
		});

		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: 'Goal Deleted!',
				success: true,
			},
		});

		dispatch({
			type: GET_GOALS_SUCCESS,
			payload: getState().goalList.goals.filter(
				(item) => item._id !== goalId
			),
		});
	} catch (error) {
		dispatch({
			type: DELETE_GOAL_FAIL,
			payload: error.response?.data?.message ?? error.message,
		});
	}
};
