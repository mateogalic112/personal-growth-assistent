import React from 'react';

import { StyledTag } from '../../theme/Button';

const Tag = ({ icon, title, setQueryString }) => {
	return (
		<StyledTag onClick={() => setQueryString(title.toLowerCase())}>
			{icon}
			{title}
		</StyledTag>
	);
};

export default Tag;
