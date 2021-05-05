import { useState } from 'react';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

const Form = ({ isOpen }) => {
	const [note, setNote] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setNote(e.target.value);
	};

	const validateForm = () => {
		return note.length > 0;
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<StyledForm onSubmit={handleSubmit}>
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='text'
							required
							name='note'
							value={note}
							onChange={handleChange}
							placeholder='Goal'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add New Goal
				</AuthBtn>
				<div style={{marginBottom: '1rem'}}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
