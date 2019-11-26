import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTermChange] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
      <View>
        <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTermChange}
            onSearchTermSubmit={() => searchApi(searchTerm)}
        />
        {
          errorMessage ?
              <Text>{errorMessage}</Text>
              : null
        }
        {
          results.length > 0 ?
              <Text>We have found {results.length} results.</Text>
              : null
        }
      </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;