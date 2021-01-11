import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { mockRestaurants } from '../mockData';
import SwipeDetail from '../components/SwipeDetail';
import { useRestaurantsResult } from '../hooks/useResults';

const Swipe = () => {
  const params: any = useParams();
  console.log('IN SWIPE', params.roomId);
  const { restaurantsResult, sendNewLikeEvent } = useRestaurantsResult({
    roomName: params.roomId,
  });
  console.log('restaurantsResult: ', restaurantsResult);
  const [restaurantCounter, setRestaurantCounter] = useState(0);
  // const [restaurantItem, setRestaurantItem] = useState(
  //   mockRestaurants[restaurantCounter]
  // );
  const [restaurantItem, setRestaurantItem] = useState(restaurantsResult);
  console.log({ restaurantItem });

  const onClickYes = () => {
    setRestaurantCounter(restaurantCounter + 1);
    sendNewLikeEvent(restaurantsResult[restaurantCounter].id);
  };
  const onClickNo = () => {
    setRestaurantCounter(restaurantCounter + 1);
  };

  useEffect(() => {
    setRestaurantItem(restaurantsResult[restaurantCounter]);
  }, [restaurantCounter]);

  const renderSwipeDetail = () => {
    if (restaurantsResult[restaurantCounter]) {
      return (
        <SwipeDetail
          backgroundImage={restaurantsResult[restaurantCounter].backgroundImage}
          id={restaurantsResult[restaurantCounter].id}
          restaurantName={restaurantsResult[restaurantCounter].restaurantName}
          description={restaurantsResult[restaurantCounter].description}
          rating={restaurantsResult[restaurantCounter].rating}
          price={restaurantsResult[restaurantCounter].price}
          onClickYes={onClickYes}
          onClickNo={onClickNo}
        />
      );
    }
  };

  return <div>{renderSwipeDetail()}</div>;
};

export default Swipe;
