import { HStack, Text, VStack } from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';
import CategoryTag from '../../components/CategoryTag';
import DrinkTypeLabel from '../../components/DrinkTypeLabel';
import useGetData from '../../hooks/useGetData';
import { useEffect, useMemo } from 'react';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import EmptyResultMessage from '../../components/EmptyResultMessage';

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
  );
};

export default DrinkDetail;
