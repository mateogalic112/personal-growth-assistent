import React from 'react';
import {
	Container,
	Image,
	Content,
	Title,
	Source,
	Author,
} from './style';

import {BtnOutlined} from '../../../../theme/Button'

import {RecipeCardSubtitle, FlexCenter, RecipeCardLabel} from '../RecipeCard/style'

import { BiTimeFive } from 'react-icons/bi';
import { BsLightning } from 'react-icons/bs';

const RecipeArticle = ({
	recipe: { image, label, totalTime, calories, totalNutrients, url },
}) => {
	return (
		<Container>
			<Image src={image} />
			<Content>
				<Title>{label}</Title>
				<Source>
				<RecipeCardLabel>{`${totalNutrients.FAT.label}: ${parseInt(
					totalNutrients.FAT.quantity
				)}g`}</RecipeCardLabel>
				<RecipeCardLabel>{`${totalNutrients.CHOCDF.label}: ${parseInt(
					totalNutrients.CHOCDF.quantity
				)}g`}</RecipeCardLabel>
				<RecipeCardLabel>{`${totalNutrients.PROCNT.label}: ${parseInt(
					totalNutrients.PROCNT.quantity
				)}g`}</RecipeCardLabel>
				</Source>
				<div
					style={{
						display: 'flex',
						marginBottom: '.5rem',
					}}
				>
					<Author></Author>
					<RecipeCardSubtitle>
						<FlexCenter>
							<BiTimeFive />
							{totalTime}{' '}
							<span style={{ fontSize: 10, marginLeft: 2 }}>min</span>
						</FlexCenter>
						<FlexCenter>
							<BsLightning color={'orange'} />
							{parseInt(calories)}{' '}
							<span style={{ fontSize: 10, marginLeft: 2 }}>
								kcal
							</span>
						</FlexCenter>
					</RecipeCardSubtitle>
				</div>
				<BtnOutlined as='a' href={url} target='_blank' black>
					Read More
				</BtnOutlined>
			</Content>
		</Container>
	);
};

export default RecipeArticle;
