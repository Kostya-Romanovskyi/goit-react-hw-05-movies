import { List } from './TrendingList.styled'
import TrendingItem from "components/TrendingItem/TrendingItem";

const TrendingList = ({ renderList, location }) => {
    return (

        <List>
            <TrendingItem renderList={renderList} location={location} />
        </List>
    )
}

export default TrendingList;