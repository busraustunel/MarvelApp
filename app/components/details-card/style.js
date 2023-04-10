import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/dimensions';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    width: screenWidth - 20,
    height: screenHeight / 2,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#100707',
  },
  description: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#573434',
  },
  image: {
    margin: 10,
    padding: 10,
    width: screenWidth - 60,
    height: screenHeight / 4,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button: {
    margin: 10,
    padding: 10,
    width: screenWidth - 60,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.green,
    borderRadius: 10,
    borderWidth: 1,
    width: screenWidth - 60,
    margin: 10,
  },
});
