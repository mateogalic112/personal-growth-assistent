import {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { updateBook } from '../../../../redux/actions/bookActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';

import { PageFormWrapper } from './style'
import { StyledForm } from '../NotesForm/style'

import { RiFilePaper2Line } from 'react-icons/ri'

const PageForm = ({book}) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { success: successUpdate } = useSelector((state) => state.updateBook)

	const [page, setPage] = useState('');

	const handleChange = (e) => {
		setPage(parseInt(e.target.value))
	}

	useEffect(() => {
		
	}, [successUpdate])


	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			updateBook(
				userInfo.token,
				book._id,
				{currentPage: book.currentPage + page , isCurrent: book.currentPage + page !== book.pages}
			)
		);

		setPage('');
	}

	const validateForm = () => {
		return page > 0 && page + book.currentPage <= book.pages;
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<PageFormWrapper>
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='number'
							required
							name='page'
							value={page}
							onChange={handleChange}
							placeholder='Add Pages'
						/>
					}
				/>
				<div style={{marginRight: '1rem'}}></div>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Submit
				</AuthBtn>
			</PageFormWrapper>
		</StyledForm>
	)
}

export default PageForm
