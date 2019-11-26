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
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
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
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
});

export default ResultsList;