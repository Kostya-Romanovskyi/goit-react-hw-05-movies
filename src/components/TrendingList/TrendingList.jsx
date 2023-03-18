import PropTypes from 'prop-types';
import { List } from './TrendingList.styled'
import TrendingItem from "components/TrendingItem/TrendingItem";

const TrendingList = ({ renderList, location }) => {
    return (

        <List>
            <TrendingItem renderList={renderList} location={location} />
        </List>
    )
}

TrendingList.propTypes = {
    renderList: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    location: PropTypes.shape().isRequired,
}

export default TrendingList;