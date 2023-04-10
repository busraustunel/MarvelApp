import React, {useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Icon} from '../icons/Icon';
import {CharactersScreen} from '../../screens/characters-screen/CharactersScreen';
import {ComicsScreen} from '../../screens/comics-screen/ComicsScreen';
import Colors from '../../utils/colors';

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

export const TabArr = [
  {
    route: 'Characters',
    label: 'Characters',
    icon: 'walk',
    component: CharactersScreen,
  },
  {route: 'Comics', label: 'Comics', icon: 'book', component: ComicsScreen},
];

export const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabNavigationContainer}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.tabNavigationContainer}>
        <View style={styles.tabButton}>
          <Animatable.View ref={circleRef} style={styles.tabButtonCircle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primaryDark}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.tabTitle}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};
