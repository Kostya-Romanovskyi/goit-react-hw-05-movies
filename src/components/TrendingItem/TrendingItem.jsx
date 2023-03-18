import PropTypes from 'prop-types';
import { Item, Link } from './TrendingItem.styled'

const TrendingItem = ({ renderList, location }) => {

    return renderList.map(({ id, title, name }) => {
        return (<Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>{title ? title : name}</Link>
        </Item>
        )
    })

}

TrendingItem.propTypes = {
    renderList: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    location: PropTypes.shape().isRequired,
}

export default TrendingItem;