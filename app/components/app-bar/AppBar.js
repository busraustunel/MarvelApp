import {AppBar, IconButton} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import { Icon } from "../icons/Icon";
export const MyAppBar = ({preset = 'primary'}) => {
  const navigation = useNavigation();
  return preset === 'primary' ? (
    <AppBar title="MARVEL APP" color="purple" tintColor="white" />
  ) : (
    <AppBar
      title="MARVEL APP"
      color="white"
      tintColor="purple"
      leading={props => (
        <IconButton
          onPress={() => navigation.goBack()}
          icon={props => <Icon name="arrow-undo" {...props} />}
          {...props}
        />
      )}
    />
  );
};
