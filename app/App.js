import React from 'react';
import {View, StatusBar} from 'react-native';
import {StackNavigation} from './navigators/stack-navigation/StackNavigation';
import colors from './utils/colors';
import {Provider} from 'react-redux';
import store from './redux/store/store';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Provider store={store}>
        <StatusBar backgroundColor={colors.primary} />
        <StackNavigation />
      </Provider>
    </View>
  );
};
export default App;
