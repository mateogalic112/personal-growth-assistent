import { useDispatch } from 'react-redux';
import { NotifierContainer } from '../Notifier/style';

import { FiLogOut } from 'react-icons/fi';

import { logout } from '../../actions/userActions';

const Logout = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<NotifierContainer onClick={handleLogout}>
			<FiLogOut />
		</NotifierContainer>
	);
};

export default Logout;
