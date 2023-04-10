import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {getCreatorsByComic} from '../../redux/actions/comicActions';
import styles from './style';

export const CreatorsListPanel = ({comicId}) => {
  const dispatch = useDispatch();
  const creators = useSelector(state =>
    state.creator.creators.find(c => c.comicId === comicId),
  )?.creators;

  console.log('creators', creators);
  const loading = useSelector(state => state.creator.loading);

  useEffect(() => {
    dispatch(getCreatorsByComic(comicId));
  }, [comicId, dispatch]);

  return (
    <View style={styles.cardContainer}>
      <Text>Creators</Text>
      {loading && <Text>Loading...</Text>}
      {!loading && creators?.length === 0 && <Text>No creators found.</Text>}
      {!loading &&
        creators &&
        creators.map((creator, index) => (
          <View key={index}>
            <Text>{creator.name}</Text>
            <Text>{creator.roleName}</Text>
          </View>
        ))}
    </View>
  );
};
