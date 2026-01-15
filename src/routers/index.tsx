import { useColorScheme } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/HomeScreen';
import DrinkDetailScreen from '../views/DrinkDetailScreen';
import FavoritesScreen from '../views/FavoritesScreen';
import ITabBarIcon from '../components/TabBarIcon';
import SearchScreen from '../views/SearchScreen';

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
      Search: {
        screen: SearchScreen,
        options: {
          tabBarLabel: 'Buscar',
          tabBarIcon: ITabBarIcon('magnify'),
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
