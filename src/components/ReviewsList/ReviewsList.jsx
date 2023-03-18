import PropTypes from 'prop-types';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

const ReviewsList = ({ reviewsList }) => {
    return (
        <ol>
            {reviewsList.map(({ id, author, content }) => (
                <ReviewsItem key={id} author={author} content={content} />
            ))}
        </ol>
    );
};

ReviewsList.propTypes = {
    reviewsList: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
}

export default ReviewsList;
