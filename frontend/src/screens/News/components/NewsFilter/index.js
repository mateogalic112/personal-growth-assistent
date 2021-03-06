import Tag from '../../../../components/Tag';

import { Filter } from './style';

import { newsFilterTags } from './data';

const NewsFilter = ({ active, setQueryString }) => {
	return (
		<Filter active={active}>
			{newsFilterTags.map((tag) => (
				<Tag
					key={tag.title}
					icon={tag.icon}
					title={tag.title}
					setQueryString={setQueryString}
				/>
			))}
		</Filter>
	);
};

export default NewsFilter;
