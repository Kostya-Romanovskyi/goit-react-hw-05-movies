import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GetReviewsByID } from '../GetTrending'
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
    const [review, setReview] = useState([])
    const { moviesID } = useParams()

    useEffect(() => {
        GetReviewsByID(moviesID).then(response => setReview(response.data.results))
    }, [moviesID])

    return (
        review.length !== 0 ? <ReviewsList reviewsList={review} /> : <p>We don`t have any reviews for this movie</p>
    )
}
export default Reviews