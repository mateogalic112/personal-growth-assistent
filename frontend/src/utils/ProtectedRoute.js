import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<Route {...rest}>
			{userInfo?.token ? <Component /> : <Redirect to='/login' />}
		</Route>
	);
};

export default ProtectedRoute;
