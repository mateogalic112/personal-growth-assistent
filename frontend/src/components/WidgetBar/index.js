import Search from '../../widgets/Search';
import Logout from '../../widgets/Logout';

import { WidgetContainer, WidgetRow } from './style';

const WidgetBar = () => {
	return (
		<WidgetContainer>
			<Search />
			<WidgetRow>
				<Logout />
			</WidgetRow>
		</WidgetContainer>
	);
};

export default WidgetBar;
