import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import { GetMovieByID } from '../components/GetTrending'
import MovieInfo from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
    const { moviesID } = useParams();
    const [movie, setMovie] = useState(null)
    const location = useLocation()

    const backLinkLocationRef = useRef(location.state?.from ?? '/' ?? '/movies')
    console.log(backLinkLocationRef)

    useEffect(() => {
        GetMovieByID(moviesID).then(response => setMovie(response))
    }, [moviesID])

    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <MovieInfo movie={movie} backLink={backLinkLocationRef.current} />

            <ul>
                <li>
                    <Link to="cast" state={moviesID}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={moviesID}>Reviews</Link>
                </li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense >
        </div>
    )
}
export default MovieDetails;