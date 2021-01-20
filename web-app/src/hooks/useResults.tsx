import { useState, useEffect, useRef } from 'react';
import restaurants from '../api/restaurants';
import socketIOClient from 'socket.io-client';

const NEW_CONNECTION_EVENT = 'newConnection';
const NEW_LIKED_EVENT = 'newLike';
const NEW_MATCH_EVENT = 'newMatch';
const SOCKET_SERVER_URL = 'http://localhost:4000' // 'https://teater-generator.herokuapp.com';

export const useRestaurantsResult = ({ roomId }: { roomId: string }) => {
  const [restaurantsResult, setRestaurantsResult] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const socketRef = useRef<any>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CONNECTION_EVENT, (message: any) => {
      setRestaurantsResult(message);
    });

    socketRef.current.on(NEW_MATCH_EVENT, (message: any) => {
      console.log('MATCHED ON: ', message)
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);
  const sendNewLikeEvent = (likedRestaurantId: string) => {
    socketRef.current.emit(NEW_LIKED_EVENT, {
      body: likedRestaurantId,
      senderId: socketRef.current.id,
    });
  };

  return { restaurantsResult, sendNewLikeEvent };
};
