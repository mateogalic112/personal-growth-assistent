import styled from 'styled-components';

export const SearchBar = styled.div`
	height: 2rem;
	width: 100%;
	max-width: 16rem;
	position: relative;
	font-size: 0.7rem;
	transition: box-shadow 0.2s, opacity 0.2s;
	border-radius: 5rem;
	opacity: 0.7;
	margin-top: .5rem;

	@media (min-width: 768px) {
		width: 16rem;
	}

	&:hover {
		box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
		opacity: 1;
	}

	input {
		height: 2rem;
		max-width: 16rem;
		width: 100%;
		padding: 0 2rem;
		border-radius: 5rem;
		border: none;
		outline: none;
		color: #14121f;

		@media (min-width: 768px) {
			width: 16rem;
		}

		&::placeholder {
			font-size: 0.7rem;
			color: #8c95a6;
		}

		&:focus {
			box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0.75rem;
		transform: translateY(-50%);
		z-index: 2;
		font-size: 0.7rem;
	}
`;
