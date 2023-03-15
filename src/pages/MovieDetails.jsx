import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";


import { GetMovieByID } from '../components/GetTrending'
import MovieInfo from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
    const { moviesID } = useParams();
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        GetMovieByID(moviesID).then(response => setMovie(response))
    }, [moviesID])

    if (!movie) {
        return <div>Loading...</div>;
    }

    const goBack = () => {


        window.history.back();

        // if (location.state && location.state.from) {
        //     return window.history.push(location.state.from);
        // }
        // window.history.push('/');
    };

    return (
        <div>
            <MovieInfo movie={movie} goBack={goBack} />
        </div>
    )
}
export default MovieDetails;