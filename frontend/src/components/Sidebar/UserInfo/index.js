import { useSelector } from 'react-redux';

import UserMale from '../../../assets/images/user_male.png';
import UserFemale from '../../../assets/images/user_female.png';

import { UserContainer, UserAvatar, UserName, UserOccupation } from './style';

const UserInfo = () => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<UserContainer>
			<UserAvatar
				src={userInfo?.gender === 'male' ? UserMale : UserFemale}
			/>
			<UserName>{userInfo?.username}</UserName>
			<UserOccupation>{userInfo?.occupation}</UserOccupation>
		</UserContainer>
	);
};

export default UserInfo;
