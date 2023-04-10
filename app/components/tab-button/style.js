import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import {screenHeight} from '../../utils/dimensions';

export default StyleSheet.create({
  tabNavigationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBar: {
    backgroundColor: Colors.black,
    height: screenHeight * 0.08,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },

  tabButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonCircle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green2,
    borderRadius: 25,
  },
  tabTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.accent,
  },
});
