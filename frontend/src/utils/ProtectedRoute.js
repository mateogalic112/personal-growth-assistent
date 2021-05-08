import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel }  from '@speechly/react-ui'

import {SpeechlyWrapper} from '../screens/Home/style'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<Route {...rest}>
			{userInfo?.token ? <Component /> : <Redirect to='/login' />}
			<SpeechlyWrapper>
				<PushToTalkButtonContainer>
					<PushToTalkButton size="4rem" />
					<ErrorPanel />
				</PushToTalkButtonContainer>
			</SpeechlyWrapper>
		</Route>
	);
};

export default ProtectedRoute;
