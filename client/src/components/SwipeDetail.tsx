import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SwipeDetail = ({
  id,
  restaurantName,
  description,
  rating,
  price,
  backgroundImage,
  onClickYes,
  onClickNo,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.4)']}
          style={styles.container}
          start={{ x: 0.8, y: 0 }}
          end={{ x: 0.8, y: 1.2 }}
        >
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.header}>{restaurantName}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onClickNo()}
              >
                <Text>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onClickYes()}
              >
                <Text>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingTop: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    height: 50,
    width: 100,
  },
  container: {
    height: windowHeight,
  },
  textContainer: {
    marginHorizontal: 15,
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bottomContainer: {
    height: windowHeight * 0.35,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
  },
});

export default withNavigation(SwipeDetail);
