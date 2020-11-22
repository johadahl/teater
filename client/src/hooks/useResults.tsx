import { useState, useEffect } from 'react';
import restaurants from '../api/restaurants';

export default () => {
  const [restaurantsResult, setRestaruantsResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const api = async () => {
    try {
      const response = await restaurants.post(
        '/getSuggestions?lat=59.332674&lng=18.068064'
      );
      console.log('RESPONSE: ', response);
      setRestaruantsResult(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
    console.log('this is the restaurants result: ', restaurantsResult);
  };

  useEffect(() => {
    api();
  }, []);

  return [api, restaurantsResult, errorMessage];
};
