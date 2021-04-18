import {useState} from 'react'

import Container from '../../layout/Container';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import Add from '../../widgets/Add';
import Form from './components/Form'

const Books = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	return (
		<Container>
			<TitleBar>
				<Title>Books</Title>
				<Add handleClick={openForm} />
			</TitleBar>
			<Form isOpen={isFormOpen} />
		</Container>
	)
}

export default Books
