import { useReducer } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createBook } from '../../../../redux/actions/bookActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from '../NotesForm/style';

const initialBookState = {
    title: '',
    author: '',
    pages: 0,
}

const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case 'RESET':
            return initialBookState
        default:
            return state
    }
}

const AddBook = ({ isOpen }) => {
    const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

    const [bookState, bookDispatch] = useReducer(bookReducer, initialBookState)

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			createBook(
                {...bookState},
				userInfo.token,
			)
		);
        bookDispatch({ type: 'RESET' })
	};

	const { error } = useSelector((state) => state.createBook);

	const handleChange = (event) => {
		bookDispatch({ type: 'ON_CHANGE', payload: { name: event.target.name, value: event.target.value } })
	};

	const validateForm = () => {
		return bookState.title.length > 0 && bookState.author.length > 0 && bookState.pages > 0;
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
                            name='title'
                            value={bookState.title}
                            onChange={handleChange}
                            placeholder='Title'
                        />
                    }
                />
                <InputField
                    icon={<RiFilePaper2Line />}
                    input={
                        <input
                            type='text'
                            required
                            name='author'
                            value={bookState.author}
                            onChange={handleChange}
                            placeholder='Author'
                        />
                    }
                />
                <InputField
                    icon={<RiFilePaper2Line />}
                    input={
                        <input
                            type='number'
                            required
                            name='pages'
                            value={bookState.pages}
                            onChange={handleChange}
                            placeholder='Pages'
                        />
                    }
                />
                <AuthBtn medium type='submit' disabled={!validateForm()}>
                    Create Book
                </AuthBtn>
                <div style={{marginBottom: '1rem'}}></div>
            </StyledForm>
        </FormWrapper>
    )
}

export default AddBook
