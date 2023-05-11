import React from 'react';
import style from './MovieInfo.module.css'
import Popup from '../UI/Popup/Popup'
import NavButton from '../UI/NavButton/NavButton';
import The_godfather from '../../assets/moviesPostersImages/The_godfather.png'


const MovieInfo = ({movie, onClose}) => {

    return (
    <Popup>
        <div className={style.container}>
            <div>
                <img className={style["movie-img"]} src={The_godfather} alt={''}/>
            </div>
            <div className={style.content}>
                <div className={style["content-up"]}>
                    <div className={style["main-title"]}> {movie?.title} </div>
                    <div className={style.runtime}> {movie?.runtime} </div>
                    <div className={style.rating}> {movie?.rating} </div>
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