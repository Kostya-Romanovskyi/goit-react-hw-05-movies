import React from "react";


import { FlexContainer, ButtonBack, Poster, MovieTitle, InfoContainer, Overview, GenresTitle } from "./MovieInfo.styled";


const MovieInfo = ({ movie: { data: { title, original_title, release_date, vote_average, overview, genres, poster_path } }, backLink }) => {


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

export default MovieInfo