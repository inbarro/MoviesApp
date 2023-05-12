import React, {useState, useEffect} from 'react';
import { getMovies } from '../../services/movie.service';
import { formatListOfMovies, getMinMaxMovieYear }  from '../../utils/movies.helper'
import style from './MoviesList.module.css'
import XLTitle from '../UI/XLTitle/XLTitle'
import MovieCard from '../MovieCard/MovieCard';
import MovieInfo from '../MovieInfo/MovieInfo';
import SearchBar from '../UI/SearchBar/SearchBar';
import RangeSlider from '../UI/RangeSlider/RangeSlider'

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [movieInfoIsShown, setMovieInfoIsShown] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [yearsQuery, setYearsQuery] = useState('');
    const [minMovieYear,setMinMovieYear] = useState('');
    const [maxMovieYear, setMaxMovieYear] = useState('');

    const filteredMovies = (() => {
        if (moviesList && moviesList.length > 0) {
            let filteredList = [...moviesList];
            if (searchQuery.length > 0 ) {
                const searchToLowerCase = searchQuery.toLowerCase();
                filteredList = filteredList.filter(movie => movie.title.toLowerCase().includes(searchToLowerCase));
            }
            if (yearsQuery) {
                filteredList = filteredList.filter(movie => movie.released >= yearsQuery);
            }
            return filteredList

        }
        return moviesList;
    })();

    useEffect(()=> {
        async function fetchMovies() {
            const payload = await getMovies();
            setMoviesList(formatListOfMovies(payload));
        }
        fetchMovies();
    },[]);

    useEffect(() => {
        if (moviesList.length > 0) {
            const {max, min} = getMinMaxMovieYear(moviesList);
            setMinMovieYear(min);
            setMaxMovieYear(max);
        }
    },[moviesList]);


    const hideMovieInfoHandler = () => {
        setMovieInfoIsShown(false)
    };

    const onMovieClicked = (movie) => {
        setSelectedMovie(movie);
        setMovieInfoIsShown(true);
    };


    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterYearChange = (range) => {
        setYearsQuery(range);
    };

    return (
        <div className={style.container}>

            <XLTitle className={style.title} text={'EXPLORE YOUR NEXT MOVIES AND TV SHOWS'}/>

            <div className={style.filters}>
                <SearchBar value={searchQuery} onChange={handleSearchInputChange} placeholder={'Search Movie'}/>
                {maxMovieYear && minMovieYear>0 &&
                <RangeSlider
                    maxValue={maxMovieYear}
                    minValue={minMovieYear}
                    handleRangeChange={handleFilterYearChange}
                    valueText={'Minimum released year: '}
                />}
            </div>

            <div className={style["movie-list"]}>
            { filteredMovies && filteredMovies.map( movie =>
                <div className={style["movie-card"]}>
                    <MovieCard
                        id={movie.id}
                        movie={movie}
                        onClick={onMovieClicked}
                    />
                    {movieInfoIsShown && selectedMovie && selectedMovie.id === movie.id &&  (
                    <MovieInfo
                        id={movie.id}
                        movie={movie}
                        onClose={hideMovieInfoHandler}
                    />
                    )}
                </div>
            )}
            {!filteredMovies && <div>No movies match your search</div>}
            </div>
        </div>
    )
};

export default MoviesList;