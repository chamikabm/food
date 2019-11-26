import React, { useState, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
              <Fragment>
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
              </Fragment>
              : null
        }
      </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;