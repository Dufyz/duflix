import './styles.css'
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { MoviesGrid } from '../../components/MoviesGrid';
import { PageScroller } from '../../components/PageScroller';
import { loadMovies } from '../../utils/load-movies';

function Home() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [maxPage, setMaxPage] = useState(2);

  const handleLoadMovies = useCallback(async () => {
    const response = await loadMovies(actualPage);
    const responseResults = response.results;
    setMoviesList(responseResults);
    setMaxPage(response.total_pages);
  }, [actualPage])

  const handleNextPage = () => {
    if(actualPage + 1 <= maxPage) {
      setActualPage(actualPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if(actualPage - 1 >= 1) {
      setActualPage(actualPage - 1);
    }
  }

  useEffect(() => {
    handleLoadMovies();
  }, [handleLoadMovies])

  return (
    <>
      <Header searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} setMoviesList={setMoviesList} handleLoadMovies={handleLoadMovies} />
      <MoviesGrid moviesList={moviesList} />
      <PageScroller handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
    </>
  );
}

export default Home;
