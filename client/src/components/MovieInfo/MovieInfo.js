import React from 'react';
import style from './MovieInfo.module.css'
import Popup from '../UI/Popup/Popup'
import NavButton from '../UI/NavButton/NavButton';
import MovieRating from '../MovieRating/MovieRating'
import noMovieImage from "../../assets/moviesPostersImages/no_image.png";


const MovieInfo = ({movie, onClose}) => {

    return (
    <Popup>
        <div className={style.container}>
            <div>
                <img className={style["movie-img"]} src={movie?.image} alt={noMovieImage}/>
            </div>
            <div className={style.content}>
                <div className={style["content-up"]}>
                    <div className={style["main-title"]}> {movie?.title} </div>
                    <div className={style.runtime}> {movie?.runtime} </div>
                    <MovieRating rating={movie?.rating} className={style.rating}/>
                    <div className={style.synopsis}> {movie?.synopsis} </div>
                </div>
                <div className={style["content-down"]}>
                    <NavButton isBack={true} text={'Back to list'} handleClick={onClose} color={'white'}/>
                </div>
            </div>
        </div>
    </Popup>
    )
};

export default MovieInfo