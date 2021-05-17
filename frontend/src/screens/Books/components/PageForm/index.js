import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateBook } from '../../../../redux/actions/bookActions';

import { useSpeechContext } from '@speechly/react-client';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';

import { PageFormWrapper } from './style';
import { StyledForm } from '../NotesForm/style';

import { RiFilePaper2Line } from 'react-icons/ri';

const PageForm = ({ book }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext();

	const { success: successUpdate } = useSelector((state) => state.updateBook);

	const [page, setPage] = useState('');

	const handleChange = (e) => {
		setPage(parseInt(e.target.value));
	};

	useEffect(() => {}, [successUpdate]);

	const handleSubmit = useCallback(
		(e) => {
			if (e) {
				e.preventDefault();
			}

			dispatch(
				updateBook(userInfo.token, book._id, {
					currentPage: book.currentPage + page,
					isCurrent: book.currentPage + page !== book.pages,
				})
			);

			setPage('');
		},
		[book._id, book.currentPage, book.pages, dispatch, page, userInfo.token]
	);

	const validateForm = useCallback(() => {
		return page > 0 && page + book.currentPage <= book.pages;
	}, [page, book.currentPage, book.pages]);

	useEffect(() => {
		if (segment) {
			if (segment.intent.intent === 'add_in_page') {
				segment.entities.forEach((entity) => {
					switch (entity.type) {
						case 'page':
							setPage(Number(entity.value));
							break;
						default:
							return;
					}
				});
				if (segment.isFinal) {
					if (validateForm()) {
						handleSubmit();
					}
					segment.words = [];
				}
			}
		}
	}, [segment, handleSubmit, validateForm]);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<p>
				{segment &&
					segment.intent.intent === 'add_in_page' &&
					segment.words.map((word) => word.value).join(' ')}
			</p>
			<PageFormWrapper>
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type="number"
							required
							name="page"
							value={page}
							onChange={handleChange}
							placeholder="Add Pages"
						/>
					}
				/>
				<div style={{ marginRight: '1rem' }}></div>
				<AuthBtn medium type="submit" disabled={!validateForm()}>
					Submit
				</AuthBtn>
			</PageFormWrapper>
		</StyledForm>
	);
};

export default PageForm;
