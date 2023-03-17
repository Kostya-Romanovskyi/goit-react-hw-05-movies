import { Item, Name, Image, ActorsRole } from "./ActorItem.styled"

const ActerItem = ({ name, popularity, character, image }) => {
    return (
        <Item>
            <Name>{name}</Name>
            <Image src={`https://image.tmdb.org/t/p/w500${image}`} alt={name} />
            <p>Character: <ActorsRole>{character}</ActorsRole> </p>
            <p>Rating {Math.round(popularity)}</p>
        </Item>
    )
}

export default ActerItem