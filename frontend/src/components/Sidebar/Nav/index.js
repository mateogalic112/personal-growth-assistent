import { Navigation, NavList, NavItem, NavIcon, NavTitle } from './style';

import { navData } from './data';

const Nav = ({ isOpen }) => {
	return (
		<Navigation isOpen={isOpen} >
			<NavList>
				{navData.map((item) => {
					return (
						<NavItem
							exact
							to={item.path}
							key={item.title}
							activeClassName='active'
						>
							<NavIcon>{item.icon}</NavIcon>
							<NavTitle>{item.title}</NavTitle>
						</NavItem>
					);
				})}
			</NavList>
		</Navigation>
	);
};

export default Nav;
