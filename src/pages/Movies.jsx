import { useState, useEffect } from "react"
import { GetSearchMovie } from "components/GetTrending"
import TrendingList from "components/TrendingList/TrendingList"

const Movies = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault()

        GetSearchMovie(query).then(response => setMovies(response.data.results))
    }

    const handleChange = (evt) => {
        setQuery(evt.target.value)
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