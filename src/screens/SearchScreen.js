import React, { useState, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTermChange] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'

    return results.filter(result => {
      return result.price === price;
    })
  };

  if(!results.length) {
    return null
  }

  /**
   * In order to fix the scroll issue with item overflow, we can use empty tags as follows
   * without the View component with the `flex:1` style property.
   */
  return (
      <>
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
        <ScrollView>
          <ResultsList
              title={'Cost Effective'}
              results={filterResultsByPrice('$')}
          />
          <ResultsList
              title={'Bit Pricier'}
              results={filterResultsByPrice('$$')}
          />
          <ResultsList
              title={'Big Spender'}
              results={filterResultsByPrice('$$$')}
          />
        </ScrollView>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // This tells React Native to Use the full visible screen. Otherwise for some device
    // screen sizes result list may hidden and won't be able to scroll down even though
    // we have `ScrollView` component in place, that is because sometimes React Native
    // uses the space even blow the bottom screen (i.e : Bottom Navigation buttons in Android devices.)
  }
});

export default SearchScreen;