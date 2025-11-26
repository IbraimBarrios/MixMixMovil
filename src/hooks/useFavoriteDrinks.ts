import { useState } from 'react';
import { getFavorites, saveFavorites } from '../utils/utils';

const useFavoriteDrinks = (idDrink: string) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState<boolean>(false);

  const toggleFavoriteDrink = async () => {
    const favoriteDrinks = await getFavorites();
    const drinkIndex = favoriteDrinks.indexOf(idDrink);
    console.log(favoriteDrinks);
    console.log(drinkIndex);

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
