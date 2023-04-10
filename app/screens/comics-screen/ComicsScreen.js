import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getComics} from '../../redux/actions/comicActions';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {MyAppBar} from '../../components/app-bar/AppBar';
import {ListView} from '../../components/list-view/ListView';
import colors from '../../utils/colors';
import styles from './style';
import {SearchBar} from '../../components/search-bar/SearchBar';

export const ComicsScreen = () => {
  const navigation = useNavigation();
  const comics = useSelector(state => state.comic.comics);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchComics() {
      await dispatch(getComics());
    }
    fetchComics().then(r => console.log(r));
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <MyAppBar preset={'primary'} />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      {comics ? (
        <ListView
          data={comics.filter(comic =>
            comic.title.toLowerCase().includes(searchText.toLowerCase()),
          )}
          dataType="comics"
          onPress={id => navigation.navigate('ComicsDetailsScreen', {id})}
        />
      ) : (
        <View
          style={[
            styles.loading,
            {flex: 1, justifyContent: 'center', alignItems: 'center'},
          ]}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};
