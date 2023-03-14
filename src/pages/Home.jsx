import { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from "react-router-dom";
import { GetTranding } from '../components/GetTrending'
import TrendingList from 'components/TrendingList/TrendingList'

const Home = () => {
    const [trends, setTrends] = useState([])
    const location = useLocation();

    const navigate = useNavigate();
    console.log(trends)

    useEffect(() => {
        GetTranding().then(response => setTrends(response.data.results))
    }, [navigate])


    return (
        <>
            <TrendingList renderList={trends} />
        </>
    )
}
export default Home