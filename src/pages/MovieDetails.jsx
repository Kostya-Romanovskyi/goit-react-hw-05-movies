import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMovieByID } from '../components/GetTrending'
import MovieInfo from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
    const { moviesID } = useParams();
    const [movie, setMovie] = useState(null)

    console.log(movie)

    useEffect(() => {
        GetMovieByID(moviesID).then(response => setMovie(response))
    }, [moviesID])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MovieInfo movie={movie} />
        </div>
    )
}
export default MovieDetails;