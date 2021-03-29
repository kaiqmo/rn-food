import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import resultsShowScreen from './src/screens/resultsShowScreen';
import HomeScreen from './src/screens/homeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow:resultsShowScreen,
    Home:HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
