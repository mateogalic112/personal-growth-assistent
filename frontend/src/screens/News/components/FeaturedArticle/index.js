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
	source,
	author,
	date,
	src,
	title,
	description,
	url,
}) => {
	return (
		<Container>
			<CoverImage src={src} />
			<Content>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: '.5rem',
					}}
				>
					<Source>{source}</Source>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Author>{author}, </Author>
						<Published>{date}</Published>
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
