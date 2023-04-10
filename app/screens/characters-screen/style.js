import {StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/dimensions';

export default StyleSheet.create({
  root: {
    flex: 1,
  },

  loading: {
    flex: 1,
    marginTop: screenHeight / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
