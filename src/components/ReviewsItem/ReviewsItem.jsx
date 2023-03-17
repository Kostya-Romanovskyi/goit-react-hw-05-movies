import { Author } from "./ReviewsItem.styled";

const ReviewsItem = ({ author, content }) => {
    return (
        <li>
            <Author>{author}</Author>
            <p>{content}</p>
        </li>
    )
}
export default ReviewsItem;