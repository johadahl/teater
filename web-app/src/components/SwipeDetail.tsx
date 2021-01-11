import React from 'react';
import { Button, TextField } from '@material-ui/core/';
// import { LinearGradient } from 'expo-linear-gradient';
const SwipeDetail = ({
  id,
  restaurantName,
  description,
  rating,
  price,
  backgroundImage,
  onClickYes,
  onClickNo,
}: any) => {
  console.log(backgroundImage);
  const styles = {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 260,
      paddingLeft: 40,
      paddingRight: 40,
    },
    header: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    },
  };
  console.log(restaurantName);
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
      <div style={{ margin: 20 }}>
        <h1 style={{ fontSize: 30, color: 'white' }}>{restaurantName}</h1>
        <h1 style={{ fontSize: 20, color: 'white' }}>{price}</h1>
        <h1 style={{ fontSize: 20, color: 'white' }}>{rating}</h1>
        <h1 style={{ fontSize: 20, color: 'white' }}>{description}</h1>
      </div>
      <div style={styles.buttonContainer}>
        <div>
          <Button
            style={{ borderRadius: 20 }}
            onClick={onClickNo}
            variant="contained"
            color="primary"
          >
            No
          </Button>
        </div>
        <div>
          <Button
            style={{ borderRadius: 20 }}
            onClick={onClickYes}
            variant="contained"
            color="primary"
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwipeDetail;
