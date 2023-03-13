import { List } from './TrendingList.styled'
import TrendingItem from "components/TrendingItem/TrendingItem";

const TrendingList = ({ renderList }) => {
    return (
        <List>
            <TrendingItem renderList={renderList} />
            <p>deede</p>
        </List>
    )
}
export default TrendingList;