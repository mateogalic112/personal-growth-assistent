import {
	TransactionCard,
	Main,
	CardTitle,
	CardType,
	Amount,
	Actions,
} from './style';

const Card = ({ transaction }) => {
	return (
		<TransactionCard>
			<Main>
				<CardTitle>{transaction.name}</CardTitle>
				<CardType>
					{transaction.type}
					{', '}
					{transaction.date}
				</CardType>
			</Main>
			<Amount>${transaction.amount}</Amount>
			<Actions></Actions>
		</TransactionCard>
	);
};

export default Card;
