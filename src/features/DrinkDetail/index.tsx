import { useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import DrinkImage from '../../components/DrinkImage';
import useGetData from '../../hooks/useGetData';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import CategoryTag from '../../components/CategoryTag';
import DrinkTypeLabel from '../../components/DrinkTypeLabel';
import IngredientsList from '../../components/IngredientsList';

type DrinkResponse = {
  drinks: Drink[];
};

type DrinkDetailProps = {
  id: string;
};

const DrinkDetail = ({ id }: DrinkDetailProps) => {
  const { data, fetchData } = useGetData<DrinkResponse>();

  const drink = useMemo(() => data?.drinks[0] || null, [data]);

  useEffect(() => {
    fetchData(`${API_BASE_V1}/lookup.php?i=${id}`);
  }, []);

  if (!drink) return <EmptyResultMessage text="No se encontro la bebida" />;

  return (
    <ScrollView>
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
          ) : null}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default DrinkDetail;
