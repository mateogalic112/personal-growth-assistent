import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
	flex-grow: 1;
	width: 100%;
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 15%;
`;

export const NavItem = styled(NavLink)`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0.15rem 0.25rem;
	margin-top: 1rem;
	text-decoration: none;
	color: #8c95a6;
	border-left: 0;
	transition: border-width 0.1s, border-color 0.1s, color 0.2s;

	&.active {
		color: #14121f;
		border-left: 0.2rem solid #14121f;
	}

	&:hover {
		border-left: 0.2rem solid #14121f;
		color: #14121f;
	}
`;

export const NavIcon = styled.i`
	font-size: 1.25rem;
	color: #14121f;
	flex-basis: 25%;
	margin-left: auto;
	display: inline-block;
	line-height: 1.25rem;
`;

export const NavTitle = styled.p`
	font-size: 1rem;
	flex-basis: 50%;
	margin-right: auto;
`;
