import { useState, useEffect } from 'react'
import { GetTranding } from '../components/GetTrending'
import TrendingList from 'components/TrendingList/TrendingList'

const Home = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        GetTranding().then(response => setTrends(response.data.results))

    }, [])

    return (
        <>
            <TrendingList renderList={trends} />
        </>
    )
}
export default Home