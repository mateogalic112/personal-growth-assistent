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

const NewsArticle = ({ src, title, source, author, url, published }) => {
	return (
		<Container>
			<Image src={src} />
			<Content>
				<Title>{title}</Title>
				<Source>{source}</Source>
				<div
					style={{
						display: 'flex',
						marginBottom: '.25rem',
					}}
				>
					<Author>{author},</Author>
					<Published>{published}</Published>
				</div>
				<Button as='a' href={url} target='_blank'>
					Read More
				</Button>
			</Content>
		</Container>
	);
};

export default NewsArticle;
