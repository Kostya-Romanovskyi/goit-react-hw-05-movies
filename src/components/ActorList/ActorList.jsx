import PropTypes from 'prop-types';
import { List } from './ActorList.styled';
import ActerItem from 'components/ActorItem/ActorItem';

const ActorList = ({ actorsArr }) => {
    return (
        <List>
            {actorsArr.map(({ id, name, popularity, character, profile_path }) => (
                < ActerItem
                    key={id}
                    name={name}
                    popularity={popularity}
                    character={character}
                    image={profile_path}
                />
            ))}
        </List>
    );
};

ActorList.propTypes = {
    actorsArr: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
}

export default ActorList;
