import React from 'react';
import style from "./MovieRating.module.css";
import starIcon from "../../assets/images/star.svg";


const WithRating = ({rating}) => {

    return (
        <div className={style.rating}>
            <div className={style["star-img"]}>
                <img src={starIcon} alt={''} />
            </div>
            <div> {rating} </div>
        </div>
    )
};

const NoRating = () => {

    return (
        <div className={style.rating}> No rating available</div>
    )
};


const MovieRating = ({rating}) => {

    return (
        <>
            {rating
                ?
                <WithRating rating={rating}/>
                :
                <NoRating/>
            }
        </>
    )
};


    export default MovieRating;