import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { mockRestaurants } from '../mockData';
import SwipeDetail from '../components/SwipeDetail';

const { width, height } = Dimensions.get('window');

const Swipe = () => {
  const [restaurantCounter, setRestaurantCounter] = useState(0);
  const [restaurantItem, setRestaurantItem] = useState(
    mockRestaurants[restaurantCounter]
  );

  const onClickYes = () => {
    setRestaurantCounter(restaurantCounter + 1);
  };
  const onClickNo = () => {
    setRestaurantCounter(restaurantCounter + 1);
  };

  useEffect(() => {
    setRestaurantItem(mockRestaurants[restaurantCounter]);
  }, [restaurantCounter]);

  return (
    <SafeAreaView>
      <SwipeDetail
        id={restaurantItem.id}
        restaurantName={restaurantItem.restaurantName}
        description={restaurantItem.description}
        rating={restaurantItem.rating}
        price={restaurantItem.price}
        backgroundImage={restaurantItem.backgroundImage}
        onClickYes={onClickYes}
        onClickNo={onClickNo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  itemWrapper: {
    width,
    height,
  },
});

export default withNavigation(Swipe);
