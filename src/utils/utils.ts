import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_DRINKS_KEY } from './constants';

export const lowerCaseText = (text: string) => {
  return text.toLowerCase();
};

export const saveFavorites = async (favorites: string[]) => {
  const favoriteDrinks = JSON.stringify(favorites);
  await AsyncStorage.setItem(FAVORITE_DRINKS_KEY, favoriteDrinks);
};

export const getFavorites = async () => {
  const storage = await AsyncStorage.getItem(FAVORITE_DRINKS_KEY);

  return storage ? JSON.parse(storage) : [];
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('¡AsyncStorage completamente limpiado!');
  } catch (e) {
    console.error('Error al limpiar AsyncStorage:', e);
  }
};
