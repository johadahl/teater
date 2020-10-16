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
import { withNavigation } from 'react-navigation';
import { mockRestaurants } from '../mockData';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SwipeDetail = ({ navigation }) => {
  const backgroundImage = mockRestaurants[2].backgroundImage;
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{mockRestaurants[2].merchantName}</Text>
            <Text style={styles.description}>{mockRestaurants[2].deal}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.warn('No')}
            >
              <Text>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.warn('Yes')}
            >
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: 'grey',
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
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
  },
});

export default withNavigation(SwipeDetail);
