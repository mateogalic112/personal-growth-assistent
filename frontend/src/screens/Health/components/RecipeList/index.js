import { Swiper, SwiperSlide } from 'swiper/react';

import RecipeCard from '../RecipeCard';

const RecipeList = ({ recipes }) => {

	return (<>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					500: {
						spaceBetween: 25,
						slidesPerView: 2,
					},
					878: {
						slidesPerView: 3,
					},
				  }}
			>
				{recipes.map(hit => (
					<SwiperSlide key={hit.uri}><RecipeCard recipe={hit.recipe} /></SwiperSlide>
				))}
			</Swiper>
			</>
	);
};

export default RecipeList;
