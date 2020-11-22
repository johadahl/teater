import React from 'react';
import { Link } from 'react-router-dom';

// import './Home.css';

const Swipe = () => {
  const [roomName, setRoomName] = React.useState('');

  const handleRoomNameChange = (event: any) => {
    setRoomName(event.target.value);
  };

  return <div>Swipe</div>;
};

export default Swipe;
