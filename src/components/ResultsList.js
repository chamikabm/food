import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title, results }) => {

  return (
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>{results.length}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;