export const loadSearch = async (query) => {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&api_key=${process.env.REACT_APP_API_SECRET_KEY}`;

  try {
    const movieResponse = await fetch(apiUrl);
    const movieJson = await movieResponse.json();
    return movieJson;
  } catch (error) {
    console.error("Error when loading movies:", error);
  }
};
