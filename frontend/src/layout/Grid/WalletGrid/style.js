import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	margin-bottom: 3rem;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}
`;
