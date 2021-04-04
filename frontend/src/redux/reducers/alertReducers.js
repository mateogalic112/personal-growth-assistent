import {
	ADD_NOTIFICATION,
	REMOVE_NOTIFICATION,
} from '../../constants/alertConstants';

export const notificationListReducer = (
	state = { notifications: [] },
	action
) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return {
				...state,
				notifications: [...state.notifications, action.payload],
			};
		case REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: state.notifications.filter(
					(i) => i.id !== action.payload
				),
			};
		default:
			return state;
	}
};
