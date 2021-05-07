import React from 'react';
import {
	Container,
	Image,
	Content,
	Title,
	Source,
	Author,
	Published,
} from './style';

import { BtnOutlined } from '../../../../theme/Button';

import { displayHour } from '../../../../helpers/date';

const NewsArticle = ({
	article: { urlToImage, title, source, author, publishedAt, url },
}) => {
	return (
		<Container>
			<Image src={urlToImage} />
			<Content>
				<Title>{title}</Title>
				<Source>{source.name}</Source>
				<div
					style={{
						display: 'flex',
						marginBottom: '.5rem',
					}}
				>
					{!!author && <Author>{author.length > 25 ? '' : `${author}, `}</Author>}
					<Published>{displayHour(publishedAt)}</Published>
				</div>
				<BtnOutlined as='a' href={url} target='_blank' black>
					Read More
				</BtnOutlined>
			</Content>
		</Container>
	);
};

export default NewsArticle;
