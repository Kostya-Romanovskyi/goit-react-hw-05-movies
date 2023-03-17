import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { GetTranding } from '../components/GetTrending'
import TrendingList from 'components/TrendingList/TrendingList'

const Home = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        GetTranding().then(response => setTrends(response.data.results))
    }, [])

    const location = useLocation()
    return (
        <>
            <TrendingList renderList={trends} location={location} />
        </>
    )
}
export default Home