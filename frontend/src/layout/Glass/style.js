import styled from 'styled-components';

export const GlassContainer = styled.section`
	background-color: rgba(255, 255, 255, 0.2);
	margin: 2rem 1rem;
	max-width: 1100px;
	min-height: 90vh;
	width: 100%;
	border-radius: 2rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
	position: relative;
	z-index: 2;
	box-shadow: 0px 0px 10px 5px rgba(68, 68, 68, 0.2);

	@media (min-width: 768px) {
		width: 95%;
		display: grid;
		grid-template-columns: 225px auto;
		grid-template-rows: 100px auto;
		margin: 4rem 2rem;
	}
`;
