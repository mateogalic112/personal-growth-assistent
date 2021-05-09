import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { SearchBar } from './style';

import { BsSearch } from 'react-icons/bs';

import { useDebounce } from '../../hooks/useDebounce'

import { useSpeechContext } from '@speechly/react-client'

const Search = () => {
	const history = useHistory()

	const { segment } = useSpeechContext()

	const [keyword, setKeyword] = useState('')

	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

	const debouncedSearchTerm = useDebounce(keyword, 750);

	useEffect(() => {
		if (debouncedSearchTerm) {
			history.push(`/search/${debouncedSearchTerm}`)
		}
	},[debouncedSearchTerm, history]);

	useEffect(() => {
		if(segment) {
			segment.entities.forEach(entity => {
				switch(entity.type) {
					case 'term':
						setKeyword(entity.value.toLowerCase())
						break;
					default:
						return;
				}
			})
			if(segment.isFinal) {
				setKeyword('')
				segment.words = []
			} 
		}
	// eslint-disable-next-line
	}, [segment])

	return (
		<SearchBar>
			<BsSearch />
			<input 
				type='text' 
				placeholder='Search'
				value={keyword}
				onChange={handleChange}
			/>
		</SearchBar>
	);
};

export default Search;
