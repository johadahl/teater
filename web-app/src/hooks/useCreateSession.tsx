import { useState, useEffect, useRef } from 'react';
import restaurants from '../api/restaurants';
import socketIOClient from 'socket.io-client';

export const createSession = async ({
  lat,
  lng,
}: {
  lat: string;
  lng: string;
}) => {
  let roomId;
  try {
    const response = await restaurants.get(
      `get-suggestion?lat=${lat}&lng=${lng}`
    );
    // setRoomId(response.data);

    roomId = response.data.roomId;
  } catch (error) {
    // setErrorMessage('Something went wrong');
  }
  // };

  // useEffect(() => {
  //   api();
  // }, [lat, lng]);


  return roomId;
};
