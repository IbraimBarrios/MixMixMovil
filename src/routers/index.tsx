import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';

const Routes = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: { headerShown: false },
    screens: {
      Home: HomeScreen,
      Detail: {
        screen: DetailScreen,
        options: {
          headerShown: true,
          title: 'Detalles',
          headerStyle: {
            backgroundColor: isDarkMode ? '#1E1E1E' : '#fff',
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
