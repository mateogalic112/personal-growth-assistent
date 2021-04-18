import { useState } from 'react';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';
import Subtitle from '../../../../components/Subtitle';

const Form = ({ isOpen, queryString, setQueryString }) => {

	const [name, setName] = useState(queryString || '');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setQueryString(name);
		setName('');
	};

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const validateForm = () => {
		return name.length > 1;
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<Subtitle>Search recipes</Subtitle>
			<StyledForm onSubmit={handleSubmit}>
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='name'
							required
							name='name'
							value={name}
							onChange={handleChange}
							placeholder='Favorite Food'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Search
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
