import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Message } from './style';

const Alert = ({ id, message, success }) => {
	const dispatch = useDispatch();
	const [exit, setExit] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setExit(true);
		}, 3500);

		return () => clearTimeout(timer);
	}, [dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch({
				type: 'REMOVE_NOTIFICATION',
				payload: id,
			});
		}, 3900);

		return () => clearTimeout(timer);
	}, [dispatch, id]);

	return (
		<Container exit={exit} success={success}>
			<Message>{message}</Message>
		</Container>
	);
};

export default Alert;
