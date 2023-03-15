import { Link } from "react-router-dom";


const MovieInfo = ({ movie: { data: { original_title, release_date, vote_average, overview, genres, poster_path } }, goBack }) => {

    return (
        <div>
            <Link onClick={goBack}>back</Link>

            <h2>{original_title} {release_date}</h2>
            <p>User score: {vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            <p>
                <span>Overview</span><br />
                {overview}
            </p>
            <p>
                <span>Overview</span><br />
                {genres.map(genre => genre.name)}
            </p>
        </div>
    )
}

export default MovieInfo