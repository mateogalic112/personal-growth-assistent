import React from 'react';

import {
	RecipeCardContainer,
	RecipeCardTitle,
	RecipeCardSubtitle,
	RecipeCardImage,
	RecipeCardLabels,
	FlexCenter,
	RecipeCardContent,
	RecipeCardLabel,
	DietLabel,
} from './style';

import { BiTimeFive } from 'react-icons/bi';
import { BsLightning } from 'react-icons/bs';

const RecipeCard = ({
	recipe: {
		label,
		image,
		totalTime,
		calories,
		ingredientLines,
		totalNutrients,
		dietLabels,
		url,
	},
}) => {
	return (
		<RecipeCardContainer
			href={url}
			target='_blank'
			rel='noreferrer noopener'
		>
			<div style={{ maxWidth: '120px' }}>
				<RecipeCardTitle>{label}</RecipeCardTitle>
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

			<RecipeCardImage src={image} />
			<RecipeCardContent>
				{ingredientLines.map((line, i) =>
					i < 5 ? <li key={i}>{line}</li> : null
				)}
				{ingredientLines.length > 5 && <p>See more...</p>}
			</RecipeCardContent>
			<RecipeCardLabels>
				<RecipeCardLabel>{`${totalNutrients.FAT.label}: ${parseInt(
					totalNutrients.FAT.quantity
				)}g`}</RecipeCardLabel>
				<RecipeCardLabel>{`${totalNutrients.CHOCDF.label}: ${parseInt(
					totalNutrients.CHOCDF.quantity
				)}g`}</RecipeCardLabel>
				<RecipeCardLabel>{`${totalNutrients.PROCNT.label}: ${parseInt(
					totalNutrients.PROCNT.quantity
				)}g`}</RecipeCardLabel>

				<DietLabel>{dietLabels.length > 0 && dietLabels[0]}</DietLabel>
			</RecipeCardLabels>
		</RecipeCardContainer>
	);
};

export default RecipeCard;
