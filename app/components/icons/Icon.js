import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Icon = ({name, color, size = 24, style}) => {
  const fontSize = 24;
  const Tag = Ionicons;
  return (
    <>
      {name && (
        <Tag
          name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
          size={size || fontSize}
          color={color}
          style={style}
        />
      )}
    </>
  );
};
