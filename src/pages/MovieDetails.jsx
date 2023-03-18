import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import { GetMovieByID } from '../components/GetTrending'
import MovieInfo from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
    const { moviesID } = useParams();
    const [movie, setMovie] = useState(null)
    const location = useLocation()

    const moviesId = Number(moviesID)

    const backLinkLocationRef = useRef(location.state?.from ?? '/' ?? '/movies')

    useEffect(() => {
        async function test(moviesId) {
            await GetMovieByID(moviesId).then(response => setMovie(response))
        }

        test(moviesId)

    }, [moviesId])

    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <MovieInfo movie={movie} backLink={backLinkLocationRef.current} />

            <ul>
                <li>
                    <Link to="cast" state={moviesId}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={moviesId}>Reviews</Link>
                </li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense >
        </div>
    )
}
export default MovieDetails;