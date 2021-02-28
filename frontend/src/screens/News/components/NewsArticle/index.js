import React from 'react';
import {
	Container,
	Image,
	Content,
	Title,
	Source,
	Author,
	Button,
	Published,
} from './style';

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
						marginBottom: '.25rem',
					}}
				>
					<Author>{author},</Author>
					<Published>{publishedAt}</Published>
				</div>
				<Button as='a' href={url} target='_blank'>
					Read More
				</Button>
			</Content>
		</Container>
	);
};

export default NewsArticle;
