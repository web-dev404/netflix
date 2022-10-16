import {InformationCircleIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import {useEffect, useState} from "react";
import {FaPlay} from "react-icons/fa";
import {baseUrl} from "../constants/movie";
import {Movie} from "../typings";

interface Props {
	netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);
	
	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
	}, [netflixOriginals]);
	
	return (
		<div className={'flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'}>
			<div className={'absolute top-0 left-0 h-[95vh] w-full -z-10'}>
				<Image layout={"fill"} objectFit={"cover"} src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
			</div>
			
			<h1 className={'text-2xl md:text-4xl lg:text-7xl font-bold'}>{movie?.title || movie?.name || movie?.original_name}</h1>
			<p className={'max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md'}>{movie?.overview}</p>
			
			<div className={'flex space-x-3'}>
				<button className={'bannerBtn bg-white text-black'}><FaPlay className={'w-4 h-4 text-black md:h-7 md:w-7'} /> Play</button>
				<button className={'bannerBtn bg-[gray]/70'}>More Info <InformationCircleIcon className={'h-5 w-5 md:h-8 md:w-8'} /></button>
			</div>
		</div>
	)
}

export default Banner;