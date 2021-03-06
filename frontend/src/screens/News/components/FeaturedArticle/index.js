import React from 'react';

import {
	Container,
	CoverImage,
	Content,
	Source,
	Author,
	Published,
	Title,
	Description,
} from './style';

import { BtnOutlined } from '../../../../theme/Button';

import { displayDate } from '../../../../helper/date';

const FeaturedArticle = ({
	article: {
		urlToImage,
		source,
		author,
		publishedAt,
		title,
		description,
		url,
	},
}) => {
	return (
		<Container>
			<CoverImage src={urlToImage} />
			<Content>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: '.5rem',
					}}
				>
					<Source>{source.name}</Source>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Author>{author}, </Author>
						<Published>{displayDate(publishedAt)}</Published>
					</div>
				</div>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<BtnOutlined as='a' href={url} target='_blank' white>
					Read more
				</BtnOutlined>
			</Content>
		</Container>
	);
};

export default FeaturedArticle;
