import React from 'react';
import {TextInput, IconButton} from '@react-native-material/core';
import styles from './style';
import {Icon} from '../icons/Icon';

export const SearchBar = ({value, onChangeText}) => (
  <TextInput
    style={styles.searchBar}
    label="Search"
    value={value}
    onChangeText={onChangeText}
    variant="outlined"
    trailing={props => (
      <IconButton
        icon={props => <Icon name="search-sharp" {...props} />}
        {...props}
      />
    )}
  />
);
