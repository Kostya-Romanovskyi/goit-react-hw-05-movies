import PropTypes from 'prop-types';
import { Author } from "./ReviewsItem.styled";

const ReviewsItem = ({ author, content }) => {
    return (
        <li>
            <Author>{author}</Author>
            <p>{content}</p>
        </li>
    )
}

ReviewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default ReviewsItem;