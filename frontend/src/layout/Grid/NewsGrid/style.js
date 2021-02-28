import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1400px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
