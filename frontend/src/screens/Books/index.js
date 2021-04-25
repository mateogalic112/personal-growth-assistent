import {useState} from 'react'

import ReactSpeedometer from "react-d3-speedometer"

import { featuredBooks } from '../../data/books'

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

const Books = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	const currentBook = {
		title: "Najbolja verzija sebe",
		author: "Mateo Galić",
		pages: 400,
		currentPage: 100,
	}

	const readBooks = [
		{ title: "aabb", author: "aa", notes: [ {date: "aa", text: "good"}, {date: "aa", text: "good"} ], },
		{ title: "aa3", author: "aa", notes: [ {date: "aa", text: "good"}, {date: "aa", text: "good"} ], },
		{ title: "aa", author: "aa", notes: [ {date: "aa", text: "good"}, {date: "aa", text: "good"} ], }
	]

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
			<Form isOpen={isFormOpen} />
			<div>
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
			<div>
				<Subtitle>Finished Books</Subtitle>
				<Table books={readBooks} />
			</div>
		</Container>
	)
}

export default Books
