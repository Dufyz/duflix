import { options } from "./headers";

export const loadMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`

    try {
        const movieResponse = fetch(url, options);
        return movieResponse;
    } catch (error) {
        console.log('Error while trying to acess movie details: ', error);
    }
}