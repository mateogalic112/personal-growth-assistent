import { useDispatch, useSelector } from 'react-redux';

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

const Card = ({ transaction }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	//TODO implement dialog
	const { loading, error, success, itemId } = useSelector(
		(state) => state.deleteTransaction
	);

	const deleteItem = () => {
		dispatch(deleteTransaction(userInfo.token, transaction._id));
	};

	return (
		<TransactionCard type={transaction.type} loading={loading}>
			<Main>
				<CardTitle>{capitalize(transaction.name)}</CardTitle>
				<CardType>{dateStringFormatter(transaction.date)}</CardType>
			</Main>
			<Amount>${transaction.amount}</Amount>
			<Actions>
				<CrudButton
					handleClick={deleteItem}
					loading={loading && itemId === transaction._id}
				>
					<AiOutlineDelete />
				</CrudButton>
			</Actions>
		</TransactionCard>
	);
};

export default Card;
