import { useCallback, useState } from 'react';
import { getFavorites, saveFavorites } from '../utils/utils';
import { useFocusEffect } from '@react-navigation/native';

const isFavorite = async (idDrink: string) => {
  const favoriteDrinks: string[] = await getFavorites();

  return favoriteDrinks.includes(idDrink);
};

const useFavoriteDrinks = (idDrink: string) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;

      const checkStatus = async () => {
        const favoriteStatus = await isFavorite(idDrink);

        if (isMounted) {
          setIsFavoriteDrink(favoriteStatus);
        }
      };

      checkStatus();

      return () => {
        isMounted = false;
      };
    }, [idDrink]),
  );

  const toggleFavoriteDrink = async () => {
    const favoriteDrinks: string[] = await getFavorites();
    const drinkIndex = favoriteDrinks.indexOf(idDrink);

    if (drinkIndex !== -1) {
      favoriteDrinks.splice(drinkIndex, 1);
      setIsFavoriteDrink(false);
    } else {
      favoriteDrinks.push(idDrink);
      setIsFavoriteDrink(true);
    }

    saveFavorites(favoriteDrinks);
  };

  return { isFavoriteDrink, toggleFavoriteDrink };
};

export default useFavoriteDrinks;
