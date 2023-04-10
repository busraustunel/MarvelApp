import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {getCharacterComics} from '../../redux/actions/characterActions';

export const ComicsListPanel = ({characterId}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterComics(characterId));
  }, [characterId, dispatch]);

  const comics = useSelector(
    state =>
      state.character.characters.find(character => character.id === characterId)
        ?.comics,
  );

  if (!comics) {
    return <Text>No comics available.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
        Comics ({comics.available})
      </Text>
      {comics.items.map(comic => (
        <Text key={comic.id}>{comic.name}</Text>
      ))}
    </View>
  );
};
