import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
