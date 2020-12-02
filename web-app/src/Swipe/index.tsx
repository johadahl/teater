import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockRestaurants } from '../mockData';
import SwipeDetail from '../components/SwipeDetail';
import { useRestaurantsResult } from '../hooks/useResults';

const Swipe = () => {
  const [roomName, setRoomName] = React.useState('');
  const [api, restaurantsResult, errorMessage] = useRestaurantsResult();
  console.log('restaurantsResult: ', restaurantsResult);
  const [restaurantCounter, setRestaurantCounter] = useState(0);
  // const [restaurantItem, setRestaurantItem] = useState(
  //   mockRestaurants[restaurantCounter]
  // );
  const [restaurantItem, setRestaurantItem] = useState(restaurantsResult);

  const onClickYes = () => {
    setRestaurantCounter(restaurantCounter + 1);
  };
  const onClickNo = () => {
    setRestaurantCounter(restaurantCounter + 1);
  };

  useEffect(() => {
    setRestaurantItem(mockRestaurants[restaurantCounter]);
  }, [restaurantCounter]);

  const handleRoomNameChange = (event: any) => {
    setRoomName(event.target.value);
  };

  return (
    <div>
      <SwipeDetail
        backgroundImage={restaurantItem.backgroundImage}
        id={restaurantItem.id}
        restaurantName={restaurantItem.restaurantName}
        description={restaurantItem.description}
        rating={restaurantItem.rating}
        price={restaurantItem.price}
        onClickYes={onClickYes}
        onClickNo={onClickNo}
      />
    </div>
  );
};

export default Swipe;
