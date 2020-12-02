import { useState, useEffect } from 'react';
import restaurants from '../api/restaurants';
export const useRestaurantsResult = () => {
  const [restaurantsResult, setRestaurantsResult] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const api = async () => {
    try {
      const response = await restaurants.get(
        'get-suggestion?lat=1234?lng=45134'
      );
      console.log('RESPONSE: ', response);
      setRestaurantsResult(response.data);
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
