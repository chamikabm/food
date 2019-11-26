import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTermChange] = useState('');
  const [results, setResults] = useState('');
  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'Singapore',
      }
    });
    setResults(response.data.businesses);
  };

  return (
      <View>
        <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTermChange}
            onSearchTermSubmit={searchApi}
        />
        <Text>{searchTerm}</Text>
        <Text>We have found {results.length} results.</Text>
      </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;