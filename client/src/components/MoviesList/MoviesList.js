import React, {useState, useEffect} from 'react';
import { formatListOfMovies, getMinMaxMovieYear }  from '../../utils/movies.helper'
import style from './MoviesList.module.css'
import XLTitle from '../UI/XLTitle/XLTitle'
import MovieCard from '../MovieCard/MovieCard';
import MovieInfo from '../MovieInfo/MovieInfo';
import SearchBar from '../UI/SearchBar/SearchBar';
import RangeSlider from '../UI/RangeSlider/RangeSlider'

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [movieInfoIsShown, setMovieInfoIsShown] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [yearsQuery, setYearsQuery] = useState('');
    const [minMovieYear,setMinMovieYear] = useState('');
    const [maxMovieYear, setMaxMovieYear] = useState('');

    const filteredMovies = (() => {
        if (moviesList && moviesList.length > 0) {
            let filteredList = [...moviesList];
            if (searchQuery.length > 0 ) {
                const searchToLowerCase = searchQuery.toLowerCase();
                filteredList = filteredList.filter(movie => movie.title.toLowerCase().includes(searchToLowerCase));
            }
            if (yearsQuery) {
                filteredList = filteredList.filter(movie => movie.released >= yearsQuery);
            }
            return filteredList

        }
        return moviesList;
    })();

    useEffect(()=> {
        setMoviesList(
            formatListOfMovies(
                [
                {
                    "id": "207856",
                    "title": "2001: A Space Odyssey",
                    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
                    "synopsis": "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
                    "rating": "8.3",
                    "type": "movie",
                    "released": "1968",
                    "runtime": "2h28m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0062622",
                    "download": "0"
                },
                {
                    "id": "215318",
                    "title": "Ace Ventura: When Nature Calls",
                    "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
                    "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
                    "rating": "6.4",
                    "type": "movie",
                    "released": "1995",
                    "runtime": "1h34m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0112281",
                    "download": "1"
                },
                {
                    "id": "234365",
                    "title": "Against All Odds",
                    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
                    "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
                    "rating": "5.9",
                    "type": "movie",
                    "released": "1984",
                    "runtime": "2h1m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0086859",
                    "download": "1"
                },
                {
                    "id": "18002692",
                    "title": "American History X",
                    "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABet1M0odJ5zjsEwRnDSs-Kj_vi5WZC-9SH7lraHwERvmUuErGWd0neKOtWlcAi9tLlfJfwMJw4kraZsHyfWlG-PqnA.jpg?r=e28",
                    "synopsis": "A neo-Nazi gets sent to prison for murder and comes out a changed man. But can he prevent his younger brother from following in his footsteps?<br><b>New on 2020-06-18</b>",
                    "rating": "8.5",
                    "released": "1998",
                    "runtime": "1h58m",
                    "type": "movie",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbHt3NoFOvz3C4W44SvcUcNulmJZV6LpOj0P81LNU1I5VmtJkFnLz9fiz_gA71vaDytjDqocpe1ay7FJS3-mn5kvS4VT.jpg?r=e28",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0120586",
                    "download": "0"
                },
                {
                    "id": "60000880",
                    "title": "28 Days",
                    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeHQaPEL1acetO9i5uD_8MOETxbr3yKdYzFhPzXmCRxB5yB6t2MD2JCJyvpi8BmPYfwtbwCZlTWWeA10-i-fbNE11Q.jpg?r=c89",
                    "synopsis": "After her drunken antics result in property damage, an alcoholic journalist enters rehab -- and soon meets a fellow resident who changes her outlook.<br><b>New on 2020-06-18</b>",
                    "rating": "6",
                    "type": "movie",
                    "released": "2000",
                    "runtime": "1h43m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXaIScp1HGn2XPV82ivaARKyiMXJ0XN6FlgOe3tj1NM08vOc-ZUqCeQoXUHIWD4paV4xL3lj_Ez9kpfNvvQZKxNnn_tW.jpg?r=c89",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0191754",
                    "download": "1"
                },
                {
                    "id": "60001801",
                    "title": "Alexandria ... Why?",
                    "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcWlKXh6yeFKLwyLydH8C-jX47eCNCHvEjj8nQv6tYdBvwcrpw-Kgp-cj7h5prXAsA3EoT4G_c2lfIVohhZfwkvWmQ.jpg?r=3c0",
                    "synopsis": "Living in Alexandria during World War II, an Egyptian teen enamored with American films dreams of making it in Hollywood.<br><b>New on 2020-06-18</b>",
                    "rating": "",
                    "type": "movie",
                    "released": "1979",
                    "runtime": "2h11m",
                    "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdjwMEYmUDZBWnbMrWNl9lu8KtfwIhsh1RtT8VCguNHO7ceB5Jq1fpbw5JT0wtJVABatokA8Ol086UwT9c5BR2mq5HrR.jpg?r=f8f",
                    "unogsdate": "2020-06-18",
                    "imdbid": "",
                    "download": "0"
                },
                {
                    "id": "60001803",
                    "title": "Alexandria: Again and Forever",
                    "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcgOH1Rh9fuG_PQcc6gQSa74CutPlqlXPreH5-luT_yIRVjz1hyYLNXbdnpWUF1hBCtM6adwn41umryqveMJ05bqGA.jpg?r=8c7",
                    "synopsis": "At the peak of his career, Yehia joins a hunger strike, becomes smitten and reckons with a creative crisis &mdash; but finds a new muse.<br><b>New on 2020-06-18</b>",
                    "rating": "",
                    "type": "movie",
                    "released": "1989",
                    "runtime": "1h49m",
                    "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf0WbQTW_smSdXEqGX-XQMBiNv1EkjMc4X-8uwkwe3fwmK-4AKSAy5I6-ml0FsXAiePG2KHM8mgvX81DVrtCquqfRLJj.jpg?r=0a0",
                    "unogsdate": "2020-06-18",
                    "imdbid": "",
                    "download": "0"
                },
                {
                    "id": "60002273",
                    "title": "Along Came a Spider",
                    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaulisu8YTwZbJxsJPQWfrX5ihDrsnTqAjomyyodEcbu4vNJQq-DkvhOqL3J3NPqAOb7dhPuw7h7ir_MreCL0Tzwhg.jpg?r=d2f",
                    "synopsis": "When a girl is kidnapped from a prestigious prep school, a homicide detective takes the case, teaming up with young security agent.<br><b>New on 2020-06-18</b>",
                    "rating": "6.4",
                    "type": "movie",
                    "released": "2001",
                    "runtime": "1h43m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ51dexFQSmqtj9o7icMN9KQxOX_6X5iKom8Dve9pZuzhqEnx738Fu2u5X4_XLNpDIQsU7M-2weiz8HiL2RBIDekH42w.jpg?r=d2f",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0164334",
                    "download": "0"
                },
                {
                    "id": "60020681",
                    "title": "Angel Eyes",
                    "image": "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABadHdWYsV2FwW7UfqVlwomKGrJ7atIA-DJCREWLmaWY0dP6UkehYv6W_fwRy4alZkAZBdvQckeQiwGDaE_1bRKv3ww.jpg?r=915",
                    "synopsis": "When a violent assault leaves her vulnerable, a streetwise Chicago cop receives help from a haunted loner who&#39;s struggling with traumas of his own.<br><b>New on 2020-06-18</b>",
                    "rating": "5.6",
                    "type": "movie",
                    "released": "2001",
                    "runtime": "1h42m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW_zO3-lMcf3WjJ4Hki8uUAgMbAlCYj3TjQSNe6N9fGQdQFxaWSo48B6V6Vy8Hx8bhag-fxejhhVK7YNrKG6wh41o9Et.jpg?r=d58",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0225071",
                    "download": "0"
                },
                {
                    "id": "60027713",
                    "title": "2 Fast 2 Furious",
                    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcPADEjySdmCNxJrnX6owPs92K-0NGAtcYnmtpNLqNsQTXglXWyTSo9MDTxUKFAYoEILjhAM0gNbxzanxRGjCoCc5g.jpg?r=ae6",
                    "synopsis": "It&#39;s a major double-cross when former cop Brian teams up with his ex-con buddy to transport a shipment of &#39;dirty&#39; money for a shady importer-exporter.<br><b>New on 2020-06-18</b>",
                    "rating": "5.9",
                    "type": "movie",
                    "released": "2003",
                    "runtime": "1h47m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXWi8cWleYPwFmSJYzCdu4b8EalVrXaprZQvOgoA41Oau4m0IxZ8gEipVc0tNUxtdMaDT2zDMvNfJAeQU-MeXs3ky2l3.jpg?r=ae6",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0322259",
                    "download": "1"
                },
                {
                    "id": "70056440",
                    "title": "300",
                    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa-TAz4e2e9CgSbKG-kVGKgw5AwwXOI2M_7-4RPACO_4uXn1oZ1BJvjF8xlExJ7_vInqnA5bQwTw9dhN9uPlVR3aNA.jpg?r=d41",
                    "synopsis": "In 480 B.C., Spartan King Leonidas leads his small band of 300 soldiers against an army of more than 1 million during the Battle of Thermopylae.<br><b>New on 2020-06-18</b>",
                    "rating": "7.5",
                    "type": "movie",
                    "released": "2007",
                    "runtime": "1h56m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQwyw3OcOEofXg58axFS5yT7qmUmTpw1HaGpzO_Q-qTqdt7GcksiptQ_YorLxQThDP9lL4SPo0hOCSvNYgCtbhHdu-rK.jpg?r=d41",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0892737",
                    "download": "1"
                },
                {
                    "id": "70084788",
                    "title": "21",
                    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVJASHjnyFMKool7h8ecHhx8K_C_w5zrE8cEoTA50e9IW2ZHdyW5_cFrt3GwHNAnoHEbX9lNP9iNbnQryb3x7G9ybg.jpg?r=b4b",
                    "synopsis": "A brilliant group of students become card-counting experts with the intent of swindling millions out of Las Vegas casinos by playing blackjack.<br><b>New on 2020-06-18</b>",
                    "rating": "6.8",
                    "type": "movie",
                    "released": "2008",
                    "runtime": "2h2m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRQXpSvT8urY69yyLsO04yi1frmMJOOjHr3CQfzYWlzqeOEruZmLCEv5j0gKONwaMtkMS8hxpWTv6TjWIGlyJ64ZSpDS.jpg?r=b4b",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0478087",
                    "download": "1"
                },
                {
                    "id": "70105125",
                    "title": "Ace Ventura Pet Detective Jr.",
                    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcbXLQyib-FJD5nc1bafncSplOBeQD7ZTdOR8q3xR0QOSpFvwO1RW9Cy3iIqgyP4Un6VZ6bLiy60e_R1FY93AeDY8Q.jpg?r=d67",
                    "synopsis": "A pet detective like his long-missing father, seventh-grader Ace Ventura Jr. springs into action when his mom is accused of stealing a panda.<br><b>New on 2020-06-18</b>",
                    "rating": "2.1",
                    "type": "movie",
                    "released": "2009",
                    "runtime": "1h33m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXgn3unsJ1rGSNZWbpbiLDYBcrdSQP_kdkUGCeKw90LReF0iyIXZNT3uhE3pIFXQCSRnCVR_R-Z9lzJ-0ecKeFz9dbiT.jpg?r=d55",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0844029",
                    "download": "0"
                },
                {
                    "id": "70107406",
                    "title": "17 Again",
                    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeN2_KkkQ-7AxhN-MvKXkYoXPqH0k9eAPt0lMHnekZOXU9vtgPMITk9T7sArll4j7JVk13zy3fj09Ir3trq89UGAZw.jpg?r=5f8",
                    "synopsis": "Nearing a midlife crisis, thirty-something Mike wishes for a &#39;do-over&#39; -- and that&#39;s exactly what he gets when he wakes up to find he&#39;s 17 again.<br><b>New on 2020-06-18</b>",
                    "rating": "6.3",
                    "type": "movie",
                    "released": "2009",
                    "runtime": "1h41m",
                    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfx1cr_u2HHBhfwNeu3UtDpd9vPFYxXiNWOb02IC28SuZVWCqdK8hqNsIjEvRUstFmsvzNQD3jBUhf-m-rWmIrdjnQ16.jpg?r=14b",
                    "unogsdate": "2020-06-18",
                    "imdbid": "tt0974661",
                    "download": "1"
                },
             ]
            )
        );
    },[]);

    useEffect(() => {
        if (moviesList.length > 0) {
            const {max, min} = getMinMaxMovieYear(moviesList);
            setMinMovieYear(min);
            setMaxMovieYear(max);
        }
    },[moviesList]);


    const hideMovieInfoHandler = () => {
        setMovieInfoIsShown(false)
    };

    const onMovieClicked = (movie) => {
        setSelectedMovie(movie);
        setMovieInfoIsShown(true);
    };


    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterYearChange = (range) => {
        setYearsQuery(range);
    };

    return (
        <div className={style.container}>
            <XLTitle className={style.title} text={'EXPLORE YOUR NEXT MOVIES AND TV SHOWS'}/>
            <SearchBar value={searchQuery} onChange={handleSearchInputChange} />
            {maxMovieYear && minMovieYear>0 && <RangeSlider
                maxValue={maxMovieYear}
                minValue={minMovieYear}
                handleRangeChange={handleFilterYearChange}
            />}
            <div className={style["movie-list"]}>
            { filteredMovies && filteredMovies.map( movie =>
                <div className={style["movie-card"]}>
                    <MovieCard
                        id={movie.id}
                        movie={movie}
                        onClick={onMovieClicked}
                    />
                    {movieInfoIsShown && selectedMovie && selectedMovie.id === movie.id &&  (
                        <MovieInfo
                            id={movie.id}
                            movie={movie}
                            onClose={hideMovieInfoHandler}
                        />
                    )}
                </div>
            )}
            {!filteredMovies && <div>No movies match your search</div>}
            </div>
        </div>
    )
};

export default MoviesList;