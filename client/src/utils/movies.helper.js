
const formatListOfMovies = (moviesList) => {
    return [...moviesList.map( movie =>  ({...movie, synopsis: removeRedundantTags(movie.synopsis)}))]
};

const removeRedundantTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)|\/>|&mdash;/g, ' ').trim()+'.';
};


export {
    formatListOfMovies,
    removeRedundantTags,
};
