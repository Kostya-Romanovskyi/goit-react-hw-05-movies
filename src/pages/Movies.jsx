import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { GetSearchMovies } from "components/GetTrending"
import TrendingList from "components/TrendingList/TrendingList"

const Movies = () => {
    // const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [request, setRequest] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
    console.log(query)


    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (query === null) {
            return
        }
        setRequest(query)

        GetSearchMovies(query).then(response => setMovies(response.data.results))

    }

    const handleChange = (evt) => {
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