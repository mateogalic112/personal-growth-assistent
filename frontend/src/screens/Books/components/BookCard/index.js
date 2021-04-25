import React from 'react';

import {
	CardContainer,
	CardTitle,
	CardSubtitle,
	CardImage,
	FlexCenter,
	CardContent,
	CardLabel,
} from './style';

import { GiBlackBook } from 'react-icons/gi';
import { BiCalendarAlt } from 'react-icons/bi';

const Card = ({
	book: {
		author,
		title,
		image_src,
		year,
		pages,
		review,
		url
	},
}) => {
	return (
		<CardContainer
			href={url}
			target='_blank'
			rel='noreferrer noopener'
		>
			<div style={{ maxWidth: '120px' }}>
				<CardTitle>{title}</CardTitle>
				<CardLabel>{author}</CardLabel>
				<CardSubtitle>
					<FlexCenter>
						<GiBlackBook />
						{pages}{' '}
						<span style={{ fontSize: 10, marginLeft: 2 }}>pages</span>
					</FlexCenter>
					<FlexCenter>
						<BiCalendarAlt />
						{year}{' '}
					</FlexCenter>
				</CardSubtitle>
			</div>

			<CardImage src={image_src} />
			<CardContent>
				<p>{review}</p>
			</CardContent>
		</CardContainer>
	);
};

export default Card;
