import { Outlet } from "react-router-dom";
import { Container, Link } from './SharedLayout.styled'

const SharedLayout = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies" end>Movies</Link>
                </nav>
            </header>
            <Outlet />
        </Container>
    )
}
export default SharedLayout