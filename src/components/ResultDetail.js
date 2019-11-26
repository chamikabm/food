import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {

  return (
      <View>
        <Image
            style={styles.imageStyle}
            source={{ uri: result.image_url }}
        />
        <Text
            style={styles.nameStyle}
        >
          {result.name}
        </Text>
        <Text
            style={styles.ratingStyle}
        >
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 5,
  },
  ratingStyle: {
  }
});

export default ResultDetail;