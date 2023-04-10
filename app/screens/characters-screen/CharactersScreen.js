import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {MyAppBar} from '../../components/app-bar/AppBar';
import {ListView} from '../../components/list-view/ListView';
import colors from '../../utils/colors';
import styles from './style';
import {SearchBar} from '../../components/search-bar/SearchBar';
import {getCharacters} from '../../redux/actions/characterActions';

export const CharactersScreen = () => {
  const navigation = useNavigation();
  const characters = useSelector(state => state.character.characters);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchCharacters() {
      await dispatch(getCharacters());
    }
    fetchCharacters().then(r => r);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <MyAppBar preset={'primary'} />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      {characters ? (
        <ListView
          data={characters.filter(character =>
            character.name.toLowerCase().includes(searchText.toLowerCase()),
          )}
          dataType="characters"
          onPress={id => navigation.navigate('CharactersDetailsScreen', {id})}
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
