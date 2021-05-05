import CrudButton from '../../../../widgets/CrudButton';

import { AiOutlineDelete, AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

import {
	CardContainer,
	Main,
	CardTitle,
	CardType,
	Amount,
	Actions,
} from './style';

const Card = ({ goal }) => {
	return (
		<CardContainer completed>
			<Main>
				<CardTitle>hello</CardTitle>
				<CardType>Tuesday, May 5, 2021</CardType>
			</Main>
			<Amount></Amount>
			<Actions>
			<CrudButton handleClick={() => {}} loading={false}>
					<AiOutlineCheckCircle />
				</CrudButton>
				<CrudButton handleClick={() => {}} loading={false}>
					<AiOutlineDelete />
				</CrudButton>
			</Actions>
		</CardContainer>
	);
};

export default Card;
