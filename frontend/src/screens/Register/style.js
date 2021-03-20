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
