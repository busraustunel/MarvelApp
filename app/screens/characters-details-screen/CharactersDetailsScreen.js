import {View} from 'react-native';
import {MyAppBar} from '../../components/app-bar/AppBar';
import styles from './style';
import {DetailsCard} from '../../components/details-card/DetailsCard';
import {useSelector} from 'react-redux';

export const CharactersDetailsScreen = ({route}) => {
  const {id} = route.params;
  const character = useSelector(state =>
    state.character.characters.find(character => character.id === id),
  );

  return (
    <View style={styles.root}>
      <MyAppBar preset={'secondary'} />
      <DetailsCard data={character} pageType="character" />
    </View>
  );
};
