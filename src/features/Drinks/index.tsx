import { useCallback, useEffect, useMemo } from 'react';
import { Box } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import { DrinkCategory } from '../../types/drink';
import { FlatList } from 'react-native';
import useGetData from '../../hooks/useGetData';
import DrinkCard from '../../components/DrinkCard';
import EmptyResultMessage from '../../components/EmptyResultMessage';

type DrinkResponse = {
  drinks: DrinkCategory[] | 'no data found';
};

type DrinksProps = {
  category: string;
};

const Drinks = ({ category }: DrinksProps) => {
  const { data, fetchData } = useGetData<DrinkResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/filter.php?c=${encodeURIComponent(category)}`);
  }, [category]);

  const Separator = useCallback(() => <Box height="$4" />, []);

  const drinks = useMemo(() => {
    if (data?.drinks === 'no data found') {
      return [];
    }

    return data?.drinks || [];
  }, [data]);

  if (drinks.length === 0)
    return <EmptyResultMessage text="No se mostraron bebidas" />;

  return (
    <FlatList
      data={drinks}
      renderItem={({ item }) => (
        <DrinkCard
          category={category}
          name={item.strDrink}
          url={item.strDrinkThumb}
        />
      )}
      keyExtractor={item => item.idDrink}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default Drinks;
