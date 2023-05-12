
const formatListOfMovies = (moviesList) => {
    return [...moviesList.map( movie =>  ({...movie, synopsis: removeRedundantTags(movie.synopsis)}))]
};

const removeRedundantTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)|\/>|&mdash;/g, ' ').trim()+'.';
};

const getMinMaxMovieYear = (moviesList) => {
    const realisedYearOfMovies = moviesList.map(movie => movie.released);
    return {max: Math.max(...realisedYearOfMovies), min: Math.min(...realisedYearOfMovies)}
};


export {
    formatListOfMovies,
    removeRedundantTags,
    getMinMaxMovieYear
};
