import { MovieCard } from "../MovieCard";
import "./styles.css";

export const MoviesGrid = ({ moviesList }) => {
  return (
    <div className="moviesgrid-bg">
      <div className="moviesgrid">
        {moviesList?.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};
