import { useState, Fragment } from 'react'
import {BsEye} from 'react-icons/bs'
import {AiFillEyeInvisible} from 'react-icons/ai'
import Add from '../../../../widgets/Add'

import {
	TableContainer,
	TableRow,
	Title,
	Author,
	Notes,
	TableNoteRow,
} from './style';

const Table = ({ books }) => {

	const [openedNotes, setOpenedNotes] = useState(["aabb"])

	return (
		<TableContainer>
			<TableRow>
				<Title>Book</Title>
				<Author>Author</Author>
				<Notes>Notes</Notes>
			</TableRow>
			{books.map((book) => {
				const isIncluded = openedNotes.includes(book.title);

				const handleClick = () => {
					if (isIncluded) {
						const newNotes = openedNotes.filter(note => note !== book.title)
						setOpenedNotes(newNotes);
					} else {
						setOpenedNotes([...openedNotes, book.title])
					}
				}

				return <Fragment key={book.title}>
					<TableNoteRow>
						<Title>
							{book.title}
						</Title>
						<Author>
							{book.author}
						</Author>
						<Notes>
							<Add handleClick={handleClick} icon={isIncluded ? <AiFillEyeInvisible /> :  <BsEye />} />
						</Notes>
					</TableNoteRow>
					{
						isIncluded && book.notes.map(note => (
							<TableNoteRow note>
								{note}
							</TableNoteRow>
						))
					}
				</Fragment>
			})}
		</TableContainer>
	);
};

export default Table;
