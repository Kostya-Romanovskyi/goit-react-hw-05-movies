import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { GetTranding } from '../components/GetTrending'
import TrendingList from 'components/TrendingList/TrendingList'

const Home = () => {
    const [trends, setTrends] = useState([])
    const location = useLocation()

    useEffect(() => {
        GetTranding().then(response => setTrends(response.data.results))
    }, [])

    return (
        <>
            <TrendingList renderList={trends} location={location} />
        </>
    )
}

export default Home