import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { loadMovieDetails } from "../../utils/load-movie-details";
import { NotFound } from "../NotFound/notfound";

export const Movie = () => {
  const params = useParams();
  const id = params.id.slice(1);
  const [movieDetails, setMovieDetails] = useState({});
  const [responseStatus, setResponseStatus] = useState(200);

  const handleMovieDetails = useCallback(async () => {
    const response = await loadMovieDetails(id);
    const responseJson = await response?.json();

    if (response.status_code === 200) {
      responseJson.release_date = responseJson.release_date
        ?.split("-")
        .reverse()
        .join("/");
    }

    setMovieDetails(responseJson);
    setResponseStatus(response.status);
  }, [id]);

  useEffect(() => {
    handleMovieDetails();
  }, [handleMovieDetails]);

  return responseStatus === 200 ? (
    <div className="movie-details-bg">
      <div className="movie-details">
        <div className="movie-details-img">
          <img
            src={`https://image.tmdb.org/t/p/w500//${movieDetails.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-details-info">
          <div className="movie-details-block">
            <div className="movie-details-top">
              <h1>{movieDetails.title}</h1>
              <div className="movie-details-items">
                <p>
                  <b>Release date:</b> {movieDetails.release_date}
                </p>
                <p>
                  <b>Runtime:</b> {Math.floor(movieDetails.runtime / 60)}h{" "}
                  {movieDetails.runtime % 60}min
                </p>
                <p>
                  <b>User Score:</b>{" "}
                  {(movieDetails.vote_average * 10).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
          <div className="movie-details-overview">
            <h1>Overview</h1>
            <div className="movie-details-items">
              <p>{movieDetails.overview}</p>
            </div>
          </div>
          <div className="movie-details-statistics">
            <h1>Statistics</h1>
            <div className="movie-details-items">
              <p>
                <b>Teste:</b> {movieDetails.status}
              </p>
              <p>
                <b>Original Language:</b> {movieDetails.original_language}
              </p>
              <p>
                <b>Budget: </b>{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(movieDetails.budget)}
              </p>
              <p>
                <b>Revenue: </b>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(movieDetails.revenue)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};
