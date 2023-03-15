import { Item, Link } from './TrendingItem.styled'
import { useLocation } from "react-router-dom";

const TrendingItem = ({ renderList }) => {
    const location = useLocation()

    return renderList.map(({ id, title, name }) => {
        return (<Item key={id} >
            <Link to={{
                pathname: `/movies/${id}`,
                state: {
                    from: location.pathname,
                },
            }}>{title ? title : name}</Link>
        </Item>
        )
    })

}
export default TrendingItem;