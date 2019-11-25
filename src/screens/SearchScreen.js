import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTermChange] = useState('');

  return (
      <View>
        <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={(term) => setSearchTermChange(term)}
            onSearchTermSubmit={() => console.log('submitted.')}
        />
        <Text>{searchTerm}</Text>
      </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;