import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({
                     searchTerm, onSearchTermChange, onSearchTermSubmit
                   }) => {

  return (
      <View style={styles.backgroundStyle}>
        <Feather
            style={styles.iconStyle}
            name={'search'}
        />
        <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder={'Search'}
            value={searchTerm}
            onChangeText={onSearchTermChange}
            onEndEditing={onSearchTermSubmit}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18, // Default fontSize is 14.
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;