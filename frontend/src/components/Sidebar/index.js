import { useState } from 'react'

import { SidebarContainer } from './style';

import UserInfo from './UserInfo';
import Nav from './Nav';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen);
	}
	return (
		<SidebarContainer>
			<UserInfo handleClick={handleClick} />
			<Nav isOpen={isOpen} />
		</SidebarContainer>
	);
};

export default Sidebar;
