
const formatListOfMovies = (moviesList) => {
    return [...moviesList.map( movie =>
        ({...movie,
            title:removeRedundantTags(movie.title),
            synopsis: removeRedundantTags(movie.synopsis)
        }))]
};

const removeRedundantTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)|\/>|&mdash;|xFF0D|uuml;|[^a-zA-Z0-9\s]/g, ' ').trim();
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
