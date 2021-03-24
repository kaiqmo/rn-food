import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import resultsShowScreen from './src/screens/resultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow:resultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
