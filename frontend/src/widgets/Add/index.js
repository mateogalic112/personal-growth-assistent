import { NotifierContainer } from '../Notifier/style';

import { GrAdd } from 'react-icons/gr';

const Add = ({ handleClick, icon = undefined }) => {
	return (
		<NotifierContainer onClick={handleClick}>
			{
				icon ? icon : <GrAdd />
			}
		</NotifierContainer>
	);
};

export default Add;
