import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { GetReviewsByID } from '../GetTrending'
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
    const location = useLocation()
    const [review, setReview] = useState([])

    useEffect(() => {
        GetReviewsByID(location.state).then(response => setReview(response.data.results))
    }, [location.state])

    return (
        review.length !== 0 ? <ReviewsList reviewsList={review} /> : <p>We don`t have any reviews for this movie</p>
    )
}
export default Reviews