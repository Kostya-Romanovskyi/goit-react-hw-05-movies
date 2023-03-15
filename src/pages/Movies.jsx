import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { GetSearchMovies } from "components/GetTrending"
import TrendingList from "components/TrendingList/TrendingList"

const Movies = () => {
    // const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
    console.log(query)


    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (query === null) {
            return
        }

        GetSearchMovies(query).then(response => setMovies(response.data.results))

    }

    const handleChange = (evt) => {
        setSearchParams({ query: evt.target.value });
    }


    useEffect(() => {
        if (query === null) {
            return
        }

        GetSearchMovies(query).then(response => setMovies(response.data.results))

    }, [])


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