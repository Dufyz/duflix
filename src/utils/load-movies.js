import { options } from "./headers";

export const loadMovies = async (page) => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    try {
        const response = fetch(url, options);
        const responseJson = (await response).json();
        return responseJson;
    } catch (error) {
        console.log("Errow while trying to load movies: ", error);
    }
}