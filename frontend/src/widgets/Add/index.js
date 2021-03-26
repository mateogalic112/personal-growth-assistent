import { NotifierContainer } from '../Notifier/style';

import { GrAdd } from 'react-icons/gr';

const Add = ({ handleClick }) => {
	return (
		<NotifierContainer onClick={handleClick}>
			<GrAdd />
		</NotifierContainer>
	);
};

export default Add;
