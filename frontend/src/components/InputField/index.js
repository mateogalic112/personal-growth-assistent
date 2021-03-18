import { StyledInput } from './style';

const InputField = ({ icon, input }) => {
	return (
		<StyledInput>
			{icon}
			{input}
		</StyledInput>
	);
};

export default InputField;
