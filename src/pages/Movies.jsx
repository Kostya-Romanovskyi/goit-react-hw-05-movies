import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { GetSearchMovies } from "components/GetTrending"
import TrendingList from "components/TrendingList/TrendingList"

const Movies = () => {
    // const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        GetSearchMovies(query).then(response => setMovies(response.data.results))
    }

    const handleChange = (evt) => {
        // setQuery(evt.target.value)
        setSearchParams({ query: evt.target.value });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='query' type="text" />
                <button type="submit">Search</button>
            </form>

            <TrendingList renderList={movies} />
        </>
    )
}

export default Movies