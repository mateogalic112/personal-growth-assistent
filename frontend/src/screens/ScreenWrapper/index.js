import React from 'react';
import Sidebar from '../../components/Sidebar';
import Board from '../../layout/Board';
import WidgetBar from '../../components/WidgetBar';
import Illustration from '../../components/Illustration';

const ScreenWrapper = ({ component: Component, ...rest }) => {
	return (
		<React.Fragment>
			<Illustration />
			<WidgetBar />
			<Sidebar />
			<Board>
				<Component {...rest} />
			</Board>
		</React.Fragment>
	);
};

export default ScreenWrapper;
