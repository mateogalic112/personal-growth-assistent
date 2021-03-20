import styled from 'styled-components';

export const StyledForm = styled.form`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const LoginIllustration = styled.img`
	width: 7.5rem;
	height: auto;
`;

export const selectStyles = {
	container: (provided, state) => ({
		...provided,
		fontSize: '.85rem',
		borderRadius: '5rem',
		opacity: 0.7,
		borderColor: 'none',
		border: 'none',
		outline: 'none',
		boxShadow: 'none',
		':hover': {
			boxShadow: '0px 0px 5px 3px rgba(68, 68, 68, 0.2)',
			opacity: 1,
		},
		transition: 'box-shadow 0.2s, opacity 0.2s',
	}),
	control: (provided, state) => ({
		...provided,
		padding: '.25rem 1rem',
		boxShadow: 'none',
		borderRadius: '5rem',
		border: 'none',
	}),
};

export const RadioWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 1rem;
`;

export const RadioField = styled.div`
	display: block;
	flex: 1 0 40%;
	background-color: white;
	opacity: 0.7;
	text-align: center;
	padding: 0.5rem 1.25rem;
	border-radius: 5rem;
	border: ${(props) =>
		props.isSelected ? '1px solid rgba(68, 68, 68, 0.35)' : 'none'};

	& + & {
		margin-left: 0.5rem;
	}

	label {
		display: block;
		color: #8c95a6;
		font-size: 0.9rem;
		cursor: pointer;
		height: 100%;
	}

	input {
		display: none;
	}

	input[type='radio']:checked {
		background-color: red;
	}
`;
