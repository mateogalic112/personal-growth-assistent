import styled from 'styled-components';

export const GraphContainer = styled.div`
	@media (min-width: 768px) {
		grid-column: 1 / -1;
	}

	canvas {
		max-width: 100%;
	}
`;
