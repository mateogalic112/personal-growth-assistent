import { SearchBar } from './style';

import { BsSearch } from 'react-icons/bs';

const Search = () => {
	return (
		<SearchBar>
			<BsSearch />
			<input type='text' placeholder='Search' />
		</SearchBar>
	);
};

export default Search;
