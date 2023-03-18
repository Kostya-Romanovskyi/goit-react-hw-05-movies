import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GetCastByID } from '../GetTrending'
import ActorList from 'components/ActorList/ActorList';

const Cast = () => {

    const { moviesID } = useParams()
    const [actors, setActors] = useState(null)

    useEffect(() => {
        GetCastByID(moviesID).then(response => setActors(response.data.cast))
    }, [moviesID])

    return (
        actors && <ActorList actorsArr={actors} />
    )
}
export default Cast