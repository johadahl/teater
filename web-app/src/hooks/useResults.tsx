import { useState, useEffect, useRef } from 'react';
import restaurants from '../api/restaurants';
import socketIOClient from 'socket.io-client';

const NEW_CONNECTION_EVENT = 'newConnection';
const SOCKET_SERVER_URL = 'https://teater-generator.herokuapp.com';

export const useRestaurantsResult = ({ roomName }: { roomName: string }) => {
  const [restaurantsResult, setRestaurantsResult] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const socketRef = useRef<any>();

  // const api = async () => {
  //   try {
  //     const response = await restaurants.get(
  //       'get-suggestion?lat=1234&lng=45134'
  //     );
  //     console.log('RESPONSE: ', response);
  //     setRestaurantsResult(response.data);
  //   } catch (error) {
  //     setErrorMessage('Something went wrong');
  //   }
  //   console.log('this is the restaurants result: ', restaurantsResult);
  // };

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomName },
    });

    socketRef.current.on(NEW_CONNECTION_EVENT, (message: any) => {
      setRestaurantsResult(message);
    });

    // socket NEW_LIKE_EVENT
    // NEW_DISLIKE_EVENT
    // NEW_MATCH_EVENT

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomName]);

  return [restaurantsResult, errorMessage];
};
