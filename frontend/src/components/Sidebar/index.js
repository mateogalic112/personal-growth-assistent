import { SidebarContainer } from './style';

import UserInfo from './UserInfo';
import Nav from './Nav';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<UserInfo />
			<Nav />
		</SidebarContainer>
	);
};

export default Sidebar;
