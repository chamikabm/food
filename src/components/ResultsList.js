import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {

  const filterResults = (results) => {
    return results.filter(result => {
      return result.image_url
    })
  };

  return (
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            data={filterResults(results)}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
              return (
                  <ResultDetail
                      result={item}
                  />
              );
            }}
        />
      </View>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;