import { Item, Link } from './TrendingItem.styled'
// import { useLocation } from "react-router-dom";

const TrendingItem = ({ renderList, location }) => {
    console.log(location)

    return renderList.map(({ id, title, name }) => {
        return (<Item key={id}>
            {/* <Link to={`/movies/${id}`} state={{ from: location.pathname }} */}
            <Link to={`/movies/${id}`} state={{ from: location }}>{title ? title : name}</Link>
        </Item>
        )
    })

}
export default TrendingItem;