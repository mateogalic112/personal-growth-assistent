import {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { featuredBooks } from '../../data/books'

import { listBooks } from '../../redux/actions/bookActions';

import Container from '../../layout/Container';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import Add from '../../widgets/Add';
import AddBook from './components/AddBook'
import NotesForm from './components/NotesForm'
import BookSlider from './components/BookSlider'
import Subtitle from '../../components/Subtitle';
import Table from './components/Table';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import CurrentBook from './components/CurrentBook';

const Books = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { loading, error, books } = useSelector(
		(state) => state.bookList
	);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	useEffect(() => {
		dispatch(listBooks(userInfo.token));
	}, [dispatch, userInfo.token]);

	const finishedBooks = books.filter(book => !book.isCurrent);

	const currentBook = books.find(book => book.isCurrent)

	return (
		<Container>
			<TitleBar>
				<Title>Books</Title>
			</TitleBar>
			<Subtitle>Featured books</Subtitle>
			<BookSlider books={featuredBooks} />
			<TitleBar>
				<Subtitle>Currently reading</Subtitle>
				<Add handleClick={openForm} />
			</TitleBar>
			{
				currentBook ? <NotesForm book={currentBook} isOpen={isFormOpen} /> : <AddBook isOpen={isFormOpen} />
			}
			{ currentBook && <CurrentBook currentBook={currentBook} />
			}
			<div>
				<Subtitle>Finished Books</Subtitle>
				{
					loading ? <Loader /> : error ? <Message error={error}></Message> : 
					<Table books={finishedBooks} />
				}
			</div>
		</Container>
	)
}

export default Books
