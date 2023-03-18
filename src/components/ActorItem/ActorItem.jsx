import PropTypes from 'prop-types';
import { Item, Name, Image, ActorsRole } from './ActorItem.styled';

const ActerItem = ({ name, popularity, character, image }) => {
    return (
        <Item>
            <Name>{name}</Name>
            <Image
                src={
                    image
                        ? `https://image.tmdb.org/t/p/w500${image}`
                        : `http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-article.png`
                }
                alt={name}
            />
            <p>
                Character: <ActorsRole>{character}</ActorsRole>{' '}
            </p>
            <p>Rating {Math.round(popularity)}</p>
        </Item>
    );
};

ActerItem.propTypes = {
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default ActerItem;
