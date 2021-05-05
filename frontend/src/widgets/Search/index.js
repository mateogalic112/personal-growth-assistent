import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { SearchBar } from './style';

import { BsSearch } from 'react-icons/bs';

import { useDebounce } from '../../hooks/useDebounce'

const Search = () => {
	const history = useHistory()

	const [keyword, setKeyword] = useState('')

	const debouncedSearchTerm = useDebounce(keyword, 750);

	useEffect(() => {
		if (debouncedSearchTerm) {
			history.push(`/search/${debouncedSearchTerm}`)
		}
	},[debouncedSearchTerm, history]);


	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

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
