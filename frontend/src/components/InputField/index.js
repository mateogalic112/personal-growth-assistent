import { StyledInput } from './style';

const InputField = ({ big, icon, input }) => {
	return (
		<StyledInput big={big} autoComplete='off'>
			{icon}
			{input}
		</StyledInput>
	);
};

export default InputField;
