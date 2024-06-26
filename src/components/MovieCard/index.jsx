import { useCallback, useEffect, useState } from "react";
import { loadMovieDetails } from "../../utils/load-movie-details";

import "./styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const MovieCard = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({});

  const handleMovieDetails = useCallback(async () => {
    const response = await loadMovieDetails(movieId);
    const responseJson = await response.json();
    responseJson.release_date = responseJson?.release_date
      .split("-")
      .reverse()
      .join("/");
    setMovieDetails(responseJson);
  }, []);

  useEffect(() => {
    handleMovieDetails();
  }, [handleMovieDetails]);

  return (
    <Link to={`/movie/:${movieId}`}>
      <div className="moviecard">
        <img
          src={`https://image.tmdb.org/t/p/w500//${movieDetails.poster_path}`}
          alt=""
        />
        <div className="moviecard-info">
          <h2>{movieDetails.title}</h2>
          <div className="moviecard-items">
            <p>
              <b>Release :</b> {movieDetails.release_date}
            </p>
            <p>
              <b>Score :</b> {Math.round(movieDetails.vote_average)}
            </p>
            <p>
              <b>Language :</b> {movieDetails.original_language}
            </p>
            <p>
              <b>Runtime :</b> {Math.round(movieDetails.runtime / 60)}h{" "}
              {movieDetails.runtime % 60}min
            </p>
          </div>
          <div className="moviecard-button">
            <Link to={`/movie/:${movieId}`}>Open</Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
