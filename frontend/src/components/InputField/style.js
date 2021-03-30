import styled from 'styled-components';

export const StyledInput = styled.div`
	height: ${(props) => (props.medium ? '2.5rem' : '2rem')};
	height: ${(props) => (props.big ? '3rem' : '2rem')};
	width: ${(props) => (props.medium ? '20rem' : '16rem')};
	width: ${(props) => (props.big ? '25rem' : '16rem')};
	position: relative;
	transition: box-shadow 0.2s, opacity 0.2s;
	border-radius: 5rem;
	opacity: 0.7;

	&:hover {
		box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
		opacity: 1;
	}

	& + & {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	input {
		height: ${(props) => (props.medium ? '2.5rem' : '2rem')};
		height: ${(props) => (props.big ? '3rem' : '2rem')};
		width: ${(props) => (props.medium ? '20rem' : '16rem')};
		width: ${(props) => (props.big ? '25rem' : '16rem')};
		padding: ${(props) => (props.big ? '1rem 3rem' : '0 2rem')};
		font-size: ${(props) => (props.big ? '1rem' : '0.8rem')};
		border-radius: 5rem;
		border: none;
		outline: none;
		color: #14121f;

		&::placeholder {
			font-size: ${(props) => (props.big ? '.85rem' : '0.75rem')};
			color: #8c95a6;
		}

		&:focus {
			box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: ${(props) => (props.big ? '1.25rem' : '.75rem')};
		transform: translateY(-50%);
		z-index: 2;
		font-size: ${(props) => (props.big ? '.85rem' : '.7rem')};
	}
`;
