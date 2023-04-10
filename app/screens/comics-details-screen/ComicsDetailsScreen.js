import {View, Text} from 'react-native';
import {MyAppBar} from '../../components/app-bar/AppBar';
import styles from './style';
import {DetailsCard} from '../../components/details-card/DetailsCard';
import {useSelector} from 'react-redux';

export const ComicsDetailsScreen = ({route}) => {
  const {id} = route.params;
  const comics = useSelector(state =>
    state.comic.comics.find(comics => comics.id === id),
  );
  return (
    <View style={styles.root}>
      <MyAppBar preset={'secondary'} />
      <DetailsCard data={comics} pageType="comics" />
    </View>
  );
};
