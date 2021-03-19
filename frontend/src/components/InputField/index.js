import { StyledInput } from './style';

const InputField = ({ big, icon, input }) => {
	return (
		<StyledInput big={big} >
			{icon}
			{input}
		</StyledInput>
	);
};

export default InputField;
