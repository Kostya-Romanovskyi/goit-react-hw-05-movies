import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { GetCastByID } from '../GetTrending'
import ActorList from 'components/ActorList/ActorList';

const Cast = () => {
    const location = useLocation()

    const [actors, setActors] = useState(null)

    useEffect(() => {
        GetCastByID(location.state).then(response => setActors(response.data.cast))
    }, [location.state])

    return (
        actors && <ActorList actorsArr={actors} />
    )
}
export default Cast