import Search from '../../widgets/Search';
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
			</WidgetRow>
		</WidgetContainer>
	);
};

export default WidgetBar;
