import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import {screenWidth} from '../../utils/dimensions';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
    width: screenWidth,
    height: 50,
  },
});
