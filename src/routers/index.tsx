import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, useColorScheme, View } from 'react-native';

import HomeScreen from '../views/HomeScreen';
import DrinkDetailScreen from '../views/DrinkDetailScreen';

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoritos</Text>
    </View>
  );
}

const Routes = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createBottomTabNavigator({
    screenOptions: {
      headerShown: false,
      tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
      tabBarInactiveTintColor: isDarkMode ? '#aaa' : '#888',
      tabBarStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
    },
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
          tabBarLabel: 'Inicio',
        },
      },
      Favorites: {
        screen: FavoritesScreen,
        options: {
          tabBarLabel: 'Favoritos',
        },
      },
    },
  });

  const RootStack = createNativeStackNavigator({
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Main: {
        screen: Tab,
        options: {
          headerShown: false,
        },
      },
      Detail: DrinkDetailScreen,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
