import React from 'react';

import user from '../../../assets/images/user.png';

import { UserContainer, UserAvatar, UserName, UserOccupation } from './style';

const UserInfo = () => {
	return (
		<UserContainer>
			<UserAvatar src={user} />
			<UserName>Matko</UserName>
			<UserOccupation>Product designer</UserOccupation>
		</UserContainer>
	);
};

export default UserInfo;
