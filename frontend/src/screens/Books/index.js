import {useState, useEffect, useMemo} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import ReactSpeedometer from "react-d3-speedometer"

import { featuredBooks } from '../../data/books'

import { listBooks } from '../../redux/actions/bookActions';

import Container from '../../layout/Container';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import Add from '../../widgets/Add';
import Form from './components/Form'
import BookSlider from './components/BookSlider'
import Subtitle from '../../components/Subtitle';
import Table from './components/Table';
import InputField from '../../components/InputField';

import { RiFilePaper2Line } from 'react-icons/ri'

import { AuthBtn } from '../../theme/Button';
import { FlexCenter } from './components/BookCard/style';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Books = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	useEffect(() => {
		dispatch(listBooks(userInfo.token));
	}, [dispatch, userInfo.token]);

	const { loading, error, books } = useSelector(
		(state) => state.bookList
	);

	const finishedBooks = useMemo(() => books.filter(book => !book.isCurrent), [books])

	const currentBook = useMemo(() => books.find(book => book.isCurrent), [books])

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
			<Form book={currentBook} isOpen={isFormOpen} />
			{ currentBook && <div>
					<div style={{ height: 200 }}>
						<ReactSpeedometer 
							forceRender={true}
							currentValueText={currentBook.title}
							minValue={0} 
							maxValue={currentBook.pages} 
							value={100}
							startColor="rgba(220, 248, 255, 1)"
							endColor="rgba(198, 232, 255, 0.99)" 
							/>
					</div>
					<ul>
						{
							currentBook.notes.map(note => (
								<li key={note}>{note}</li>
							))
						}
					</ul>
					<FlexCenter style={{marginBottom: '3rem'}}>
						<InputField
							icon={<RiFilePaper2Line />}
							input={
								<input
									type='name'
									required
									name='name'
									value=''
									onChange={() => {}}
									placeholder='Add Pages'
								/>
							}
						/>
						<div style={{width: 20}}></div>
						<AuthBtn medium type='submit'>
							Submit
						</AuthBtn>
					</FlexCenter>
				</div>
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
