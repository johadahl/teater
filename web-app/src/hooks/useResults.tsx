import { useState, useEffect, useRef } from 'react';
import restaurants from '../api/restaurants';
import socketIOClient from 'socket.io-client';

const NEW_CONNECTION_EVENT = 'newConnection';
const NEW_LIKED_EVENT = 'newLikedRestaurant';
const NEW_MATCH_EVENT = 'newLikedRestaurant';
const SOCKET_SERVER_URL = 'https://teater-generator.herokuapp.com';

export const useRestaurantsResult = ({ roomName }: { roomName: string }) => {
  const [restaurantsResult, setRestaurantsResult] = useState<any>([]);
  const [matchResult, setMatchResult] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const socketRef = useRef<any>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomName },
    });

    socketRef.current.on(NEW_CONNECTION_EVENT, (message: any) => {
      setRestaurantsResult(message);
    });

    socketRef.current.on(NEW_MATCH_EVENT, (message: any) => {
      setMatchResult(message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomName]);
  const sendNewLikeEvent = (likedRestaurantId: string) => {
    socketRef.current.emit(NEW_LIKED_EVENT, {
      body: likedRestaurantId,
      senderId: socketRef.current.id,
    });
  };

  return { restaurantsResult, sendNewLikeEvent };
};
