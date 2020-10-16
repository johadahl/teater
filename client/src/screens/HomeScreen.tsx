import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Home from '../components/Home';

const HomeScreen = () => {
  const navigateToSwipeScreen = () => {};
  return (
    <View>
      <Text>Home Screen</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
