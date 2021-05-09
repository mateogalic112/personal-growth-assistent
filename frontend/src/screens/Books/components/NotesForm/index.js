import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useSpeechContext } from '@speechly/react-client'

import { updateBook } from '../../../../redux/actions/bookActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

const NotesForm = ({ isOpen, book }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext()

	const [note, setNote] = useState('');

	const handleSubmit = async (e) => {
		if(e) {
			e.preventDefault();
		}
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

	useEffect(() => {
		if(segment) {
			if(segment.intent.intent === 'add_note' && segment.isFinal) {
				const note = segment.words.map(w => w.value).join(' ').split('NOTE IS')[1]?.trim()
				if(!note) {
					return;
				}
				dispatch(
					updateBook(
						userInfo.token,
						book._id,
						{notes: [...book.notes, note]}
					)
				);
				segment.words = []
			}
		}
		// eslint-disable-next-line
	}, [segment, userInfo])

	return (
		<FormWrapper isOpen={isOpen || segment?.words?.length > 0}>
			<StyledForm onSubmit={handleSubmit}>
			<p>
				{segment && segment.words.map(word => word.value).join(' ')}
			</p>
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

export default NotesForm;
