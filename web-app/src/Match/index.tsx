import React from 'react';
import { Button } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import { mockRestaurants } from '../mockData';

const Match = (restaurant: any) => {
  const history = useHistory();
  const {
    backgroundImage,
    id,
    restaurantName,
    description,
    rating,
    price,
  } = mockRestaurants[0];
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
        height: 500,
        width: 400,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          marginTop: 100,
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ fontSize: 40, color: 'white' }}>Its a match!</h1>
        <h1 style={{ fontSize: 30, color: 'white' }}>{restaurantName}</h1>

        <Button
          style={{ borderRadius: 20, marginTop: 160 }}
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href = 'http://google.com';
          }}
        >
          Go to restaurant
        </Button>
      </div>
    </div>
  );
};

export default Match;
