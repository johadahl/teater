import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import { createSession } from '../hooks/useCreateSession';

// import './Home.css';

const Home = () => {
  // const [roomName, setRoomName] = useState('');
  // var roomId;
  const [position, setPosition] = useState({ lat: '', lng: '' });
  const history = useHistory();

  const onCreateRoomClick = async () => {
    const roomId = await createSession({
      lat: '124',
      lng: '1234',
    });
    // setRoomName(roomId);
    // console.log('!!!!!!!', roomName);
    console.log('???????', roomId);
    history.push(`/${roomId}`);
  };

  const styles = {
    container: {},
  };

  return (
    <div
      style={{
        backgroundColor: 'lightgrey',
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
        {/* <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Enter session id..."
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-field"
            // style={{ width: 180, borderRadius: 8 }}
          />
        </div> */}
        {/* <Button
          style={{ borderRadius: 20 }}
          variant="contained"
          color="primary"
          onClick={() => history.push(`/${roomName}`)}
        >
          Join session
        </Button> */}
        <Button
          style={{ borderRadius: 20 }}
          variant="contained"
          color="primary"
          onClick={onCreateRoomClick}
        >
          Create session
        </Button>
      </div>
    </div>
  );
};

export default Home;
