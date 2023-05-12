import React from 'react';
import style from './MovieCard.module.css';
import noMovieImage from '../../assets/moviesPostersImages/no_image.png'
import Card from '../UI/Card/Card'
import NavButton from '../UI/NavButton/NavButton';
import MovieRating from '../MovieRating/MovieRating'


function MovieCard({ movie, onClick }) {

    function handleClick() {
        onClick(movie);
    }

    return (
        <Card>
            <img className={style["movie-img"]} src={movie?.image} alt={noMovieImage}/>
            <div className={style.title}>
                <span className={style["movie-name"]}>{movie.title}</span>
                <span className={style["movie-released"]}>({movie.released})</span>
            </div>
            <div className={style.description}>
                <MovieRating rating={movie?.rating}/>
                <div className={style['nav-button']}>
                    <NavButton text={'Read more'} handleClick={handleClick} color={'blue'}/>
                </div>
            </div>
        </Card>
    );
}

export default MovieCard;
