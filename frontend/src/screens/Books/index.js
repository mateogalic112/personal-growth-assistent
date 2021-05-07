import {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { featuredBooks } from '../../data/books'

import { listBooks } from '../../redux/actions/bookActions';

import Container from '../../layout/Container';
import TitleBar from '../../components/TitleBar';
import Pagination from '../../components/Pagination';
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
import Graph from './components/Graph'

const LIMIT_FINISHED_BOOKS = 5;

const Books = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { loading, error, books } = useSelector(
		(state) => state.bookList
	);

	useEffect(() => {
		dispatch(listBooks(userInfo.token));
	}, [dispatch, userInfo.token]);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	const finishedBooks = books.filter(book => !book.isCurrent);
	const currentBook = books.find(book => book.isCurrent)

	// Pagination
	const pages = Math.ceil(finishedBooks.length / LIMIT_FINISHED_BOOKS);
	const [currentPage, setCurrentPage] = useState(1);


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
			<div style={{marginBottom: '2rem'}}>
				<Subtitle>Finished Books</Subtitle>
				{
					loading ? <Loader /> : error ? <Message error={error}></Message> : (
						<>
							<Pagination
								pages={[...Array(pages).keys()]}
								currPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
							<Table books={finishedBooks.slice(
								(currentPage - 1) * LIMIT_FINISHED_BOOKS,
								currentPage * LIMIT_FINISHED_BOOKS
							)} />
						</>
					)
				}
			</div>
			<Graph books={finishedBooks} />
		</Container>
	)
}

export default Books
