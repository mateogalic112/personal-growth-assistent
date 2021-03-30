import { StyledInput } from './style';

const InputField = ({ big, medium, icon, input }) => {
	return (
		<StyledInput big={big} medium={medium} autoComplete='off'>
			{icon}
			{input}
		</StyledInput>
	);
};

export default InputField;
