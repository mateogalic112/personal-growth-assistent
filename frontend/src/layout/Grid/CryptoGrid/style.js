import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-auto-flow: row dense;
	}
`;
