import {Mousewheel, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Movie} from "../typings";
import Thumbnail from "./Thumbnail";
import 'swiper/css/navigation';

interface Props {
	title: string,
	movies: Movie[]
}

const Row = ({title, movies}: Props) => {
	return (
		<div className={'mb-20'}>
			<h2 className={'mb-4 w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'}>{title}</h2>
			<div>
				<Swiper
					spaceBetween={20}
					slidesPerView={5.5}
					className={'swiper'}
					grabCursor={true}
					modules={[Mousewheel, Navigation]}
					navigation
				>
					{movies.map((movie) => (
						<SwiperSlide key={movie.id}><Thumbnail movie={movie} /></SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	)
}

export default Row