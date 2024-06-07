import axios from "axios";
import { GenreResponse } from "./movieTypes";

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

/** Get the genres */
export const getGenres = async () => {
	const data = await get<GenreResponse>("/genre/movie/list?language=en");
	return data;
}
