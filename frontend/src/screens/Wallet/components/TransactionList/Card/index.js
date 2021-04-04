import { useDispatch, useSelector } from 'react-redux';

import { v4 } from 'uuid';
import { deleteTransaction } from '../../../../../redux/actions/transactionActions';

import { dateStringFormatter } from '../../../../../helper/date';
import { capitalize } from '../../../../../helper/string';

import CrudButton from '../../../../../widgets/CrudButton';

import { AiOutlineDelete } from 'react-icons/ai';

import {
	TransactionCard,
	Main,
	CardTitle,
	CardType,
	Amount,
	Actions,
} from './style';
import { ADD_NOTIFICATION } from '../../../../../constants/alertConstants';

const Card = ({ transaction }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { loading, error } = useSelector((state) => state.deleteTransaction);

	const deleteItem = () => {
		dispatch(deleteTransaction(userInfo.token, transaction._id));
	};

	if (error)
		dispatch({
			type: ADD_NOTIFICATION,
			payload: {
				id: v4(),
				message: 'Transaction not deleted!',
				success: false,
			},
		});

	return (
		<TransactionCard type={transaction.type}>
			<Main>
				<CardTitle>{capitalize(transaction.name)}</CardTitle>
				<CardType>{dateStringFormatter(transaction.date)}</CardType>
			</Main>
			<Amount>${parseFloat(transaction.amount).toFixed(2)}</Amount>
			<Actions>
				<CrudButton handleClick={deleteItem} loading={loading}>
					<AiOutlineDelete />
				</CrudButton>
			</Actions>
		</TransactionCard>
	);
};

export default Card;
