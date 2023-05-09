import React, {Fragment, ReactPortal} from 'react';
import Popup from '../UI/Popup/Popup'

const MovieInfo = ({movie, onClose}) => {

    return (
    <Popup>
        <div>MovieInfo</div>
        <div>ID: {movie.id}</div>
        <button
            onClick={onClose}
        >
            <div> go Back</div>
        </button>
    </Popup>
    )
};

export default MovieInfo