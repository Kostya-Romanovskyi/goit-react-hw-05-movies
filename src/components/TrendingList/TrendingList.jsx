import { List } from './TrendingList.styled'
import TrendingItem from "components/TrendingItem/TrendingItem";

const TrendingList = ({ renderList }) => {
    return (
        <List>
            <TrendingItem renderList={renderList} />
        </List>
    )
}
export default TrendingList;