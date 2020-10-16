import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { mockRestaurants } from '../mockData';
import SwipeDetail from '../components/SwipeDetail';

const Swipe = ({ navigation }) => {
  return (
    <View>
      <SwipeDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(Swipe);
