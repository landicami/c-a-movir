import axios from "axios";
import { ASingleMovieResponse, ActorResponse, GenreResponse, MoviesResponse } from "./movieTypes";

const BEARER = import.meta.env.VITE_MOVIE_BEARER_KEY

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	timeout: 10000,
	headers: {
		"Accept": 'application/json',
		"Content-Type": "application/json",
		"Authorization": `Bearer ${BEARER}` ,
	}
})

const get = async <T>(endpoint: string) => {
	const res = await instance.get<T>(endpoint);
	return res.data;
}

/** Get now playing */
export const getNowPlayingMovies = async () => {
	const data = await get<MoviesResponse>("/movie/now_playing?include_adult=false&language=en-US&page=1");
	return data;
}

/** Get trending */
export const getNowTrendingMovies = async () => {
	const data = await get<MoviesResponse>("/trending/movie/week?include_adult=false&language=en-US");
	return data;
}

/** Get the genres */
export const getGenres = async () => {
	const data = await get<GenreResponse>("/genre/movie/list?&include_adult=false&language=en-US");
	return data;
}


/** Get a single movie for detailspage */
export const getASingleMovie = async (movieId: number) => {
	const data = await get<ASingleMovieResponse>(`/movie/${movieId}?append_to_response=credits&include_adult=false&language=en-US`);
	return data;
}

/** Get a single actor */
export const getActor = async (actorId: number) => {
	const data = await get<ActorResponse>(`/person/${actorId}?include_adult=false&language=en-US`);
	return data;
}

/** Get the moviecredits for actor */
export const getActorMovies = async(actorId: number) => {
	const data = await get<MoviesResponse>(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=en-US&include_adult=false`);
	return data;
}
