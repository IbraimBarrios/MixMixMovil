import { Box, Text } from '@gluestack-ui/themed';
import { useCallback, useEffect, useMemo } from 'react';
import useGetData from '../../hooks/useGetData';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import { FlatList } from 'react-native';
import DrinkCard from '../../components/DrinkCard';

type SearchResponse = {
  drinks: Drink[] | null;
};

type SearchResultsProps = {
  search: string;
};

const SearchResults = ({ search }: SearchResultsProps) => {
  const { data, fetchData } = useGetData<SearchResponse>();

  const Separator = useCallback(() => <Box height="$4" />, []);

  useEffect(() => {
    fetchData(`${API_BASE_V1}/search.php?s=${search}`);
  }, [search]);

  const drinks = useMemo(() => data?.drinks || [], [data?.drinks]);

  return (
    <>
      <Text size="lg" bold color="$black" sx={{ _dark: { color: '$white' } }}>
        Explorar
      </Text>
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
    </>
  );
};

export default SearchResults;
