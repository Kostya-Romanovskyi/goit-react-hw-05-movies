import { Link } from './TrendingItem.styled'

const TrendingItem = ({ renderList }) => {
    return renderList.map(({ id, title, name }) => {
        return <Link key={id}>{title ? title : name}</Link>
    })

}
export default TrendingItem;