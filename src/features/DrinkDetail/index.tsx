import { useEffect, useMemo } from 'react';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import DrinkImage from '../../components/DrinkImage';
import useGetData from '../../hooks/useGetData';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import CategoryTag from '../../components/CategoryTag';
import DrinkTypeLabel from '../../components/DrinkTypeLabel';
import IngredientsList from '../../components/IngredientsList';
import RequestErrorMessage from '../../components/RequestErrorMessage';

type DrinkResponse = {
  drinks: Drink[];
};

type DrinkDetailProps = {
  id: string;
};

const DrinkDetail = ({ id }: DrinkDetailProps) => {
  const { data, error, fetchData } = useGetData<DrinkResponse>();

  const drink = useMemo(() => data?.drinks[0] || null, [data]);

  useEffect(() => {
    fetchData(`${API_BASE_V1}/lookup.php?i=${id}`);
  }, []);

  if (error) return <RequestErrorMessage />;

  if (!drink) return <EmptyResultMessage text="No se encontro la bebida" />;

  return (
    <VStack space="md">
      <DrinkImage url={drink.strDrinkThumb} />
      <HStack alignItems="center" justifyContent="space-between">
        <CategoryTag category={drink.strCategory} />
        <DrinkTypeLabel drinkType={drink.strAlcoholic} />
      </HStack>
      <VStack space="md">
        <Text
          bold
          size="2xl"
          color="$black"
          sx={{ _dark: { color: '$white' } }}
        >
          {drink.strDrink}
        </Text>
        <IngredientsList drink={drink} />
        {drink.strInstructionsES ? (
          <Text
            size="md"
            lineHeight="$md"
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            {drink.strInstructionsES}
          </Text>
        ) : (
          <Text color="$black" bold sx={{ _dark: { color: '$white' } }}>
            Sin instruciones
          </Text>
        )}
        <HStack space="md">
          <Text color="$black" bold sx={{ _dark: { color: '$white' } }}>
            Vaso:
          </Text>
          <Text color="$black" sx={{ _dark: { color: '$white' } }}>
            {drink.strGlass}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default DrinkDetail;
