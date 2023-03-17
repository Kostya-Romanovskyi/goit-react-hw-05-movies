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
export default ReviewsList;
