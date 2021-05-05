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

export const goalListReducer = (
	state = { goals: [] },
	action
) => {
	switch (action.type) {
		case GET_GOALS_REQUEST:
			return { loading: true, goals: [] };
		case GET_GOALS_SUCCESS:
			return { loading: false, goals: action.payload };
		case GET_GOALS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const createGoalReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_GOAL_REQUEST:
			return { loading: true };
		case CREATE_GOAL_SUCCESS:
			return {
				loading: false,
                success: true
			};
		case CREATE_GOAL_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};


export const updateGoalReducer = (
	state = {},
	action
) => {
	switch (action.type) {
		case UPDATE_GOAL_REQUEST:
			return { loading: true };
		case UPDATE_GOAL_SUCCESS:
			return {
				loading: false,
                success: true,
			};
		case UPDATE_GOAL_FAIL:
			return { loading: false, success: false,  error: action.payload };
		default:
			return state;
	}
};

export const deleteGoalReducer = (
	state = {},
	action
) => {
	switch (action.type) {
		case DELETE_GOAL_REQUEST:
			return { loading: true };
		case DELETE_GOAL_SUCCESS:
			return {
				loading: false,
                success: true,
			};
		case DELETE_GOAL_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};