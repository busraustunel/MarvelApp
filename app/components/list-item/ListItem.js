import { Avatar, ListItem } from "@react-native-material/core";

export const MyListItem = ({ image, title, secondaryText, onPress }) => {
  return (
    <ListItem
      leadingMode="avatar"
      leading={<Avatar image={image} />}
      title={title}
      secondaryText={secondaryText}
      onPress={onPress}
    />
  );
};
