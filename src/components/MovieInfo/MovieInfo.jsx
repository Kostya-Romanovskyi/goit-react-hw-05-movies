import React from "react";
import PropTypes from 'prop-types';


import { FlexContainer, ButtonBack, Poster, MovieTitle, InfoContainer, Overview, GenresTitle } from "./MovieInfo.styled";


const MovieInfo = ({ movie: { data: { title, release_date, vote_average, overview, genres, poster_path } }, backLink }) => {

    return (
        <FlexContainer >
            <div>
                <ButtonBack to={backLink}>Go back</ButtonBack>

                <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            </div>

            <InfoContainer>
                <MovieTitle>{title} ({release_date})</MovieTitle>
                <p>Rating: {vote_average.toFixed(1)}</p>
                <p>
                    <Overview>Overview</Overview>
                    {overview}
                </p>

                <GenresTitle>Genres</GenresTitle>
                <ul>
                    {genres.map(genre => <li key={genre.name}>{genre.name}</li>)}
                </ul>

            </InfoContainer>
        </FlexContainer>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            overview: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
            poster_path: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

export default MovieInfo