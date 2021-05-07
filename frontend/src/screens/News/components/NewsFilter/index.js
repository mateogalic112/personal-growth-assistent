import { useSelector } from 'react-redux';

import Tag from '../../../../components/Tag';

import { Filter } from './style';

import { newsFilterTags, mustHaveTags } from './data';

const NewsFilter = ({ active, setQueryString }) => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<Filter active={active}>
			{
				mustHaveTags.map(tag => (
					<Tag
							key={tag.title}
							icon={tag.icon}
							title={tag.title}
							setQueryString={setQueryString}
						/>
				))
			}
			{newsFilterTags.map((tag) => {
				if(userInfo.interests.includes(tag.title.toLowerCase())) {
					return (
						<Tag
							key={tag.title}
							icon={tag.icon}
							title={tag.title}
							setQueryString={setQueryString}
						/>
					)
				}
				return null;
		})}
		</Filter>
	);
};

export default NewsFilter;
