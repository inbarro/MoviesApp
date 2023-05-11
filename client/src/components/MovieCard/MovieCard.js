import React, {useState, useEffect} from 'react';
import style from './MovieCard.module.css';
import noMovieImage from '../../assets/moviesPostersImages/no_image.png'
import starIcon from '../../assets/images/star.svg'
import NavButton from '../UI/NavButton/NavButton';


function MovieCard({ movie, onClick }) {
    // let imageSource =

    function handleClick() {
        onClick(movie);
    }


    return (
        <div className={style.container} >
            <img className={style["movie-img"]} src={movie?.image ? movie.image : noMovieImage} alt={''}/>
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
                    <NavButton text={'Read more'} handleClick={handleClick} color={'blue'}/>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
