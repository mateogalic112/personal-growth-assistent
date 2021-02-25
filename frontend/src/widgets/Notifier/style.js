import styled from 'styled-components';

export const NotifierContainer = styled.div`
	width: 2.25rem;
	height: 2.25rem;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: box-shadow 0.2s, opacity 0.2s;
	opacity: 0.7;

	&:hover {
		box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
		opacity: 1;
	}

	& + & {
		margin-left: 1rem;
	}

	svg {
		width: 0.85rem;
		height: 0.85rem;
	}
`;
