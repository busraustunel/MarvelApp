import React from 'react';
import {View, Text, Image, ScrollView, Linking} from 'react-native';
import {Button} from '@react-native-material/core';
import {ComicsListPanel} from '../comics-list-panel/ComicsListPanel';
import {CreatorsListPanel} from '../creators-panel/CreatorsPanel';
import styles from './style';

export const DetailsCard = ({data, pageType}) => {
  const openMarvelProfile = () => {
    Linking.openURL(data.urls.find(url => url.type === 'detail').url);
  };

  const onCharacterPress = characterId => {
    console.log('characterId', characterId);
  };

  const renderCharacterDetails = () => {
    return (
      <View style={styles.cardContainer}>
        <ScrollView>
          <Text style={styles.title}>{data.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `${data.thumbnail.path}.${data.thumbnail.extension}`,
            }}
          />
          {data.description ? (
            <Text style={styles.description}>{data.description}</Text>
          ) : (
            <Text style={styles.description}>No description available.</Text>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Total Comic Count: {data.comics.available}
            </Text>
            <Text style={styles.description}>
              Total Series Count: {data.series.available}
            </Text>
            <Text style={styles.description}>
              Total Story Count: {data.stories.available}
            </Text>
            <Text style={styles.description}>
              Total Event Count: {data.events.available}
            </Text>
          </View>
          <ComicsListPanel characterId={data.id} />
          <Button
            style={styles.button}
            onPress={openMarvelProfile}
            title="Marvel Profile"
          />
        </ScrollView>
      </View>
    );
  };

  const renderComicDetails = () => {
    return (
      <>
        <View style={styles.cardContainer}>
          <ScrollView>
            <Text style={styles.title}>{data.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: `${data.thumbnail.path}.${data.thumbnail.extension}`,
              }}
            />
            {data.description ? (
              <Text style={styles.description}>{data.description}</Text>
            ) : (
              <Text style={styles.description}>No description available.</Text>
            )}
            <View style={styles.textContainer}>
              <Text style={styles.description}>
                Page Count: {data.pageCount}
              </Text>
            </View>
            <CreatorsListPanel comicId={data.id} />
            <Button
              style={styles.button}
              onPress={openMarvelProfile}
              title="Marvel Profile"
            />
          </ScrollView>
        </View>
      </>
    );
  };

  const renderDetails = () => {
    switch (pageType) {
      case 'character': // use character render method
        return renderCharacterDetails();
      case 'comics': // use comics render method
        return renderComicDetails();
      default:
        return null;
    }
  };

  return <>{renderDetails()}</>;
};
