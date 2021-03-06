import styled from 'styled-components';

export const FilterContainer = styled.button`
	padding: 0.25rem 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	transition: background-color 0.2s, border 0.2s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(0, 0, 0, 0);
	}

	&:focus {
		outline: none;
	}
`;

export const FilterIcon = styled.i`
	margin-left: 0.5rem;
	font-size: 1.25rem;

	& svg {
		display: inline-block;
		vertical-align: middle;
	}
`;

export const Text = styled.p`
	font-size: 0.85rem;
	color: #14121f;
`;
