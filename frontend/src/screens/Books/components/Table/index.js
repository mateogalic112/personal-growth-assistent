import { useState } from 'react'
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

	const [openNoteId, setOpenNoteId] = useState([])

	return (
		<TableContainer>
			<TableRow>
				<Title>Book</Title>
				<Author>Author</Author>
				<Notes>Notes</Notes>
			</TableRow>
			{books.map((book) => (
				<>
				<TableNoteRow key={book.title}>
					<Title>
						{book.title}
					</Title>
					<Author>
						{book.author}
					</Author>
					<Notes>
						<Add icon={books.includes(book.title) ? <AiFillEyeInvisible /> :  <BsEye />} />
					</Notes>
				</TableNoteRow>
				<TableNoteRow note>
					aaa
				</TableNoteRow>
				</>
			))}
		</TableContainer>
	);
};

export default Table;
