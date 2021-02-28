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
	Button,
} from './style';

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
						<Published>{publishedAt}</Published>
					</div>
				</div>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Button as='a' href={url} target='_blank'>
					Read more
				</Button>
			</Content>
		</Container>
	);
};

export default FeaturedArticle;
