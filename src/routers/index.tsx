import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';

const Routes = () => {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: { headerShown: false },
    screens: {
      Home: HomeScreen,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
