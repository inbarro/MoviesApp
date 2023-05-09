import React, {useState, useEffect} from 'react';
import style from './MovieCard.module.css';
import The_godfather from '../../assets/images/The_godfather.png'
import starIcon from '../../assets/images/star.svg'
import NavButton from '../UI/NavButton/NavButton';
// import {getMovieInfo} from '../../services/Movie.service';

function MovieCard({ movie, onClick }) {

    function handleClick() {
        onClick(movie);
    }

    return (
        <div className={style.container} onClick={handleClick}>
            <img className={style["movie-img"]} src={The_godfather} alt={''}/>
            <div className={style.title}>
                <span className={style["movie-name"]}>{movie.title}</span>
                <span className={style["movie-released"]}>({movie.released})</span>
            </div>
            <div className={style.description}>
                <div className={style.rating}>
                    <div className={style["star-img"]}><img src={starIcon} alt={''}/></div>
                    <div> {movie.rating} </div>
                </div>
                <div className={style['nav-button']}>
                    <NavButton text={'Read more'}/>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
