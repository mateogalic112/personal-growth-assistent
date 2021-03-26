import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	border-radius: 2rem;

	@media (min-width: 768px) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
	}
`;
