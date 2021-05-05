import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid';

import { ADD_NOTIFICATION } from '../../../../constants/alertConstants';

import { dateStringFormatter } from '../../../../helpers/date';

import CrudButton from '../../../../widgets/CrudButton';

import { AiOutlineDelete, AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

import { deleteGoal, updateGoal } from '../../../../redux/actions/goalActions';

import {
	CardContainer,
	Main,
	CardTitle,
	CardType,
	Amount,
	Actions,
} from './style';

const Card = ({ goal }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { loading: loadingDelete, error: errorDelete } = useSelector((state) => state.deleteGoal);
	const { loading: loadingUpdate, error: errorUpdate } = useSelector((state) => state.updateGoal);

	const deleteItem = () => {
		dispatch(deleteGoal(userInfo.token, goal._id));
	};

	const updateItem = () => {
		dispatch(updateGoal(userInfo.token, goal._id, {isCompleted: !goal.isCompleted}));
	};

	if (errorDelete || errorUpdate)
		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: errorDelete ? 'Goal not deleted!' : 'Goal not updated!',
				success: false,
			},
		});

	return (
		<CardContainer completed={goal.isCompleted}>
			<Main>
				<CardTitle>{goal.title}</CardTitle>
				<CardType>{dateStringFormatter(goal.date)}</CardType>
			</Main>
			<Amount></Amount>
			<Actions>
			<CrudButton handleClick={updateItem} loading={loadingDelete || loadingUpdate}>
					{goal.isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
				</CrudButton>
				<CrudButton handleClick={deleteItem} loading={loadingDelete || loadingUpdate}>
					<AiOutlineDelete />
				</CrudButton>
			</Actions>
		</CardContainer>
	);
};

export default Card;
