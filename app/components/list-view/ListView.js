import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import {MyListItem} from '../list-item/ListItem';
import {useNavigation} from '@react-navigation/native';
import styles from '../../screens/characters-screen/style';
import colors from '../../utils/colors';

export const ListView = ({data, dataType, onPress}) => {
  const navigation = useNavigation();

  // Check if data is an array, if not, set it to an empty array
  if (!Array.isArray(data)) {
    data = [];
  }

  return (
    <ScrollView>
      {data.map(item => (
        <MyListItem
          key={item.id}
          image={{
            uri:
              dataType === 'comics'
                ? `${item.thumbnail.path}.${item.thumbnail.extension}`
                : `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`,
          }}
          title={dataType === 'comics' ? item.title : item.name}
          secondaryText={
            dataType === 'comics' ? (
              item.description ? (
                item.description
              ) : (
                'No description available.'
              )
            ) : (
              <>
                {item.characterDescription ? (
                  <Text>{item.characterDescription}</Text>
                ) : (
                  item.description && <Text>{item.description}</Text>
                )}
                <Text>Total comics: {item.comics.available}</Text>
                <Text> Total stories: {item.stories.available}</Text>
                <Text> Total series: {item.series.available}</Text>
                <Text> Total events: {item.events.available}</Text>
              </>
            )
          }
          additionalInfo={
            dataType === 'comics' && (
              <>
                <Text>Page count: {item.pageCount}</Text>
              </>
            )
          }
          onPress={() => {
            if (onPress) {
              onPress(item.id);
            } else {
              navigation.navigate(
                dataType === 'comics' ? 'ComicDetail' : 'CharacterDetail',
                {item},
              );
            }
          }}
        />
      ))}
      {data.length === 0 && (
        <View style={[styles.loading]}>
          <ActivityIndicator size="large" color={colors.green} />
        </View>
      )}
    </ScrollView>
  );
};
