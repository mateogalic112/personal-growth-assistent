import { Swiper, SwiperSlide } from 'swiper/react';

import RecipeCard from '../RecipeCard';

const RecipeList = ({ recipeQueryResponse }) => {

	return (<>
			<h1>{`Recipes for ${recipeQueryResponse.q}`}</h1>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					540: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 1,
					},
					878: {
						slidesPerView: 2,
					},
					1140: {
						slidesPerView: 3,
					},
				  }}
			>
				{recipeQueryResponse.hits.map((hit, i) => (
					<SwiperSlide key={i}><RecipeCard recipe={hit.recipe} /></SwiperSlide>
				))}
			</Swiper>
			</>
	);
};

export default RecipeList;
