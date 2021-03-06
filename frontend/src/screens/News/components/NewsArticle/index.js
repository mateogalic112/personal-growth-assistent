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

import { displayDate } from '../../../../helper/date';

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
					{!!author && <Author>{author},</Author>}
					<Published>{displayDate(publishedAt)}</Published>
				</div>
				<BtnOutlined as='a' href={url} target='_blank' black>
					Read More
				</BtnOutlined>
			</Content>
		</Container>
	);
};

export default NewsArticle;
