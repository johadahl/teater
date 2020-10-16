import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Swipe screen"
        onPress={() => navigation.navigate('Swipe')}
      />
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

export default withNavigation(Home);
