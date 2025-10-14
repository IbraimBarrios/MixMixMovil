import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';

const Routes = () => {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: { headerShown: false },
    screens: {
      Home: HomeScreen,
      Detail: {
        screen: DetailScreen,
        options: { headerShown: true, title: 'Detalles' },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
