import { useCallback, useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import useGetData from '../../hooks/useGetData';
import DrinkCard from '../../components/DrinkCard';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import RequestErrorMessage from '../../components/RequestErrorMessage';

type SearchResponse = {
  drinks: Drink[] | null | 'no data found';
};

type SearchResultsProps = {
  search: string;
};

const SearchResults = ({ search }: SearchResultsProps) => {
  const { data, error, fetchData } = useGetData<SearchResponse>();

  const Separator = useCallback(() => <Box height="$4" />, []);

  useEffect(() => {
    fetchData(`${API_BASE_V1}/search.php?s=${search}`);
  }, [search]);

  const drinks = useMemo(() => data?.drinks, [data?.drinks]);

  if (error) return <RequestErrorMessage />;

  if (!drinks || drinks === 'no data found')
    return (
      <EmptyResultMessage text="No se encontraron resultados en la búsqueda" />
    );

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
