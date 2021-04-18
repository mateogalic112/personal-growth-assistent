import styled from 'styled-components';

export const BoardContainer = styled.section`
	display: flex;
	flex-direction: column;
	background-color: rgba(255, 255, 255, 0.2);
	padding-top: 1rem;
	padding-bottom: 1rem;
	border-radius: 1rem;
	position: relative;
	overflow: hidden;

	@media (min-width: 768px) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
`;
