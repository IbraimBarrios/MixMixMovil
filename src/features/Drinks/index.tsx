import { useCallback, useEffect, useMemo } from 'react';
import { Box } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import { DrinkCategory } from '../../types/drink';
import DrinkCard from '../../components/DrinkCard';
import useGetData from '../../hooks/useGetData';
import { FlatList } from 'react-native';

type DrinkResponse = {
  drinks: DrinkCategory[];
};

type DrinksProps = {
  category: string;
};

const Drinks = ({ category }: DrinksProps) => {
  const { data, fetchData } = useGetData<DrinkResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/filter.php?c=${category}`);
  }, [category]);

  const Separator = useCallback(() => <Box height="$4" />, []);

  const drinks = useMemo(() => data?.drinks || [], [data]);

  return (
    <FlatList
      data={drinks}
      renderItem={({ item }) => (
        <DrinkCard name={item.strDrink} url={item.strDrinkThumb} />
      )}
      keyExtractor={item => item.idDrink}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default Drinks;
