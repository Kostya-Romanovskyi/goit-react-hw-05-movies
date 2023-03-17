import { List } from './ActorList.styled';
import ActerItem from 'components/ActorItem/ActorItem';

const ActorList = ({ actorsArr }) => {
    return (
        <List>
            {actorsArr.map(({ id, name, popularity, character, profile_path }) => (
                <ActerItem
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
export default ActorList;
