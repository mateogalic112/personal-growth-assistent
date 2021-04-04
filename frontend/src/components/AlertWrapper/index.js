import React from 'react';

import { useSelector } from 'react-redux';
import Alert from './Alert';

import { AlertContainer } from './style';

const AlertWrapper = () => {
	const { notifications } = useSelector((state) => state.notificationList);

	return (
		<AlertContainer>
			{notifications.map((notification) => {
				return <Alert key={notification.id} {...notification} />;
			})}
		</AlertContainer>
	);
};

export default AlertWrapper;
