import Search from '../../widgets/Search';
import Logout from '../../widgets/Logout';
import Notifier from '../../widgets/Notifier';

import { WidgetContainer, WidgetRow } from './style';

import { notifierData } from '../../widgets/Notifier/data';

const WidgetBar = () => {
	return (
		<WidgetContainer>
			<Search />
			<WidgetRow>
				{notifierData.map((item, index) => (
					<Notifier key={index}>{item.icon}</Notifier>
				))}
				<Logout />
			</WidgetRow>
		</WidgetContainer>
	);
};

export default WidgetBar;
