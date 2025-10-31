import * as React from 'react';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, useColorScheme, View } from 'react-native';

import HomeScreen from '../views/HomeScreen';
import DrinkDetailScreen from '../views/DrinkDetailScreen';
import ITabBarIcon from '../components/TabBarIcon';

function FavoritesScreen() {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoritos</Text>
      <Button title="Detalles" onPress={() => navigate.navigate('Detail')} />
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
          tabBarIcon: ITabBarIcon('home'),
        },
      },
      Favorites: {
        screen: FavoritesScreen,
        options: {
          tabBarLabel: 'Favoritos',
          tabBarIcon: ITabBarIcon('heart'),
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
      Detail: {
        screen: DrinkDetailScreen,
        options: {
          headerShown: true,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
          title: '',
          headerStyle: {
            backgroundColor: isDarkMode ? '$backgroundDark950' : '$white',
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
        },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
