import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 0.25rem 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 9999px;
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

export const LoadMoreBtn = styled(Button)`
	display: block;
	margin: 0 auto;
	padding: 0.35rem 1rem;
`;

export const AuthBtn = styled(LoadMoreBtn)`
	padding: 0.5rem 1.5rem;
	width: 25rem;

	&:disabled:hover {
		background-color: transparent;
		border: 1px solid rgba(0, 0, 0, 0.1);
		cursor: not-allowed;
	}

	&:not(:disabled) {
		background-color: rgba(255, 255, 255, 0.8);
	}
`;

/**
 * Variations -- Outlined
 */

export const BtnOutlined = styled.button`
	display: inline-block;
	color: ${(props) => (props.white ? 'white' : 'black')};
	text-decoration: none;
	border: ${(props) => (props.white ? '1px solid white' : '1px solid black')};
	padding: ${(props) => (props.white ? '0.35rem 1.15rem' : '0.25rem 1rem;')};
	font-size: ${(props) => (props.white ? '0.9rem' : '0.75rem')};
	width: fit-content;
	border-radius: 1rem;
	background-color: transparent;
	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background-color: ${(props) => (props.white ? 'white' : 'black')};
		color: ${(props) => (props.white ? 'black' : 'white')};
	}
`;

/**
 * Tag
 */

export const StyledTag = styled(Button)`
	font-size: 0.8rem;
	padding: 0.35rem 0.85rem;
	margin: 0.5rem;

	svg {
		margin-right: 0.15rem;
		font-size: 1rem;
	}
`;
