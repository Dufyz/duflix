import { useCallback } from 'react';
import './styles.css'
import { loadSearch } from '../../utils/load-search-movies';

export const Header = ({ searchInputValue, setSearchInputValue, setMoviesList, handleLoadMovies }) => {
    const handleSearchMovie = useCallback(async () => {
        const response = await loadSearch(searchInputValue);
        const responseResults = response.results;
        setMoviesList(responseResults);
    }, [searchInputValue])

    const handleSearchInput = (event) => {
        const temp = event.target.value;
        setSearchInputValue(temp);
        if (!(temp.trim() === '')) {
            handleSearchMovie();
        } else {
            handleLoadMovies();
        }
    }

    return (
        <div className="header-bg">
            <div className="header">
                <div className="header-title">
                    <h1>New Releases</h1>
                </div>
                <div className="header-search">
                    <input type="text" placeholder='Search' value={searchInputValue} onChange={handleSearchInput} />
                </div>
            </div>
        </div>
    )
}