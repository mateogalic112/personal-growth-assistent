import { Swiper, SwiperSlide } from 'swiper/react';

import BookCard from '../BookCard';

const BookSlider = ({ books }) => {

	return (<>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					500: {
						spaceBetween: 15,
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					},
				  }}
			>
				{books.map(item => (
					<SwiperSlide key={item.title}><BookCard book={item} /></SwiperSlide>
				))}
			</Swiper>
			</>
	);
};

export default BookSlider;
