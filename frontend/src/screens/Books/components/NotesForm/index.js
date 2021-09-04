import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useSpeechContext } from '@speechly/react-client';

import { updateBook } from '../../../../redux/actions/bookActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

const NotesForm = ({ isOpen, book }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext();

	const [note, setNote] = useState('');

	const handleSubmit = useCallback(
		async (e) => {
			if (e) {
				e.preventDefault();
			}
			dispatch(
				updateBook(userInfo.token, book._id, {
					notes: [...book.notes, note],
				})
			);
			setNote('');
		},
		[book._id, book.notes, dispatch, note, userInfo.token]
	);

	const { error } = useSelector((state) => state.updateBook);

	const handleChange = (e) => {
		setNote(e.target.value);
	};

	const validateForm = useCallback(() => {
		return note.length > 0;
	}, [note]);

	useEffect(() => {
		if (segment) {
			if (segment.intent.intent === 'add_note') {
				const note = segment.words
					.map((w) => w.value)
					.join(' ')
					.split('NOTE IS')[1]
					?.trim();
				if (!note) {
					return;
				}
				setNote(`${note.charAt(0)}${note.slice(1).toLowerCase()}`);
			}
			if (segment.isFinal) {
				if (validateForm()) {
					handleSubmit();
				}
				segment.words = [];
			}
		}
		// eslint-disable-next-line
	}, [segment, userInfo]);

	return (
		<FormWrapper
			isOpen={
				isOpen ||
				(segment?.words?.length > 0 &&
					segment.intent.intent === 'add_note')
			}
		>
			<StyledForm onSubmit={handleSubmit}>
				<p>
					{segment &&
						segment.intent.intent === 'add_note' &&
						segment.words.map((word) => word.value).join(' ')}
				</p>
				{error && <Message error>{error}</Message>}
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type="text"
							required
							name="note"
							value={note}
							onChange={handleChange}
							placeholder="Note"
						/>
					}
				/>
				<AuthBtn medium type="submit" disabled={!validateForm()}>
					Add Note
				</AuthBtn>
				<div style={{ marginBottom: '1rem' }}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default NotesForm;
