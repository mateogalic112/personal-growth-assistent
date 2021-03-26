import styled from 'styled-components';

export const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	border-radius: 9999px;
	padding: 0.25rem 2rem;
	max-height: ${(props) => (props.active ? '20rem' : '0')};
	opacity: ${(props) => (props.active ? '1' : '0')};
	margin-bottom: 1rem;
	background-color: rgba(255, 255, 255, 0.25);
	transition: max-height 0.35s, opacity 0.35s;
`;
