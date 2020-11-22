import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SwipeScreen from './src/screens/SwipeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Swipe: SwipeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNaigationOptions: {
      //remove later
      headerMode: 'none',
      // title: 'Swipe!',
    },
  }
);

export default createAppContainer(navigator);
