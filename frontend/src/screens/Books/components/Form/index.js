import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateBook } from '../../../../redux/actions/bookActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

const Form = ({ isOpen, book }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [note, setNote] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			updateBook(
				userInfo.token,
				book._id,
				{notes: [...book.notes, note]}
			)
		);
		setNote('');
	};

	const { error } = useSelector((state) => state.updateBook);

	const handleChange = (e) => {
		setNote(e.target.value);
	};

	const validateForm = () => {
		return note.length > 0;
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<StyledForm onSubmit={handleSubmit}>
				{error && <Message error>{error}</Message>}
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='text'
							required
							name='note'
							value={note}
							onChange={handleChange}
							placeholder='Note'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add Note
				</AuthBtn>
				<div style={{marginBottom: '1rem'}}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
