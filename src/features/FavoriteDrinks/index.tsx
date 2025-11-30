import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import { getFavorites } from '../../utils/utils';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import DrinkCard from '../../components/DrinkCard';

const FavoriteDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | unknown>();

  const Separator = useCallback(() => <Box height="$4" />, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds: string[] = await getFavorites();

      if (favoriteIds.length === 0) {
        setDrinks([]);
        setLoading(false);
        return;
      }

      try {
        const responses = await Promise.all(
          favoriteIds.map((id: string) =>
            fetch(`${API_BASE_V1}/lookup.php?i=${id}`).then(res => res.json()),
          ),
        );

        const allDrinks = responses
          .map(data => data.drinks?.[0])
          .filter(Boolean);

        setDrinks(allDrinks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <FlatList
      data={drinks}
      renderItem={({ item }) => (
        <DrinkCard
          drinkId={item.idDrink}
          name={item.strDrink}
          category={item.strCategory}
          url={item.strDrinkThumb}
        />
      )}
      keyExtractor={item => item.idDrink}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default FavoriteDrinks;
