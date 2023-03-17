import { useState, useEffect } from "react"
import { useSearchParams, useLocation } from "react-router-dom";
import { GetSearchMovies } from "components/GetTrending"
import TrendingList from "components/TrendingList/TrendingList"
import MovieForm from "components/MovieForm/MovieForm";

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') ?? ""

    const location = useLocation()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (query === null) {
            return
        }

        GetSearchMovies(query).then(response => setMovies(response.data.results))
    }

    const handleChange = (evt) => {
        if (evt.target.value === "") {
            return setSearchParams({})
        }

        setSearchParams({ query: evt.target.value });
    }

    useEffect(() => {
        GetSearchMovies(query).then(response => setMovies(response.data.results))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <MovieForm submit={handleSubmit} change={handleChange} inputValue={query} />

            <TrendingList renderList={movies} location={location} />
        </>
    )
}

export default Movies