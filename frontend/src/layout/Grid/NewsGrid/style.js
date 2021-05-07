import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	margin-bottom: 3rem;

	@media (min-width: 500px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;
