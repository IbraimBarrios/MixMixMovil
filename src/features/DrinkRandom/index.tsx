import { useEffect, useMemo } from 'react';
import { Button, ButtonText, HStack, Text, VStack } from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';
import CategoryTag from '../../components/CategoryTag';
import { useNavigation } from '@react-navigation/native';
import useGetData from '../../hooks/useGetData';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';

type DrinkResponse = {
  drinks: Drink[];
};

const DrinkRandom = () => {
  const navigation = useNavigation();
  const { data, isLoading, fetchData } = useGetData<DrinkResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/random.php`);
  }, []);

  const drink = useMemo(() => data?.drinks[0] || null, [data]);

  if (isLoading) return <Text>Cargando...</Text>;
  if (!drink) return <Text>No se encontro ninguna bebida</Text>;

  return (
    <>
      <DrinkImage url={drink.strDrinkThumb} variant="wide" />
      <VStack space="md" marginTop="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Text
            size="xl"
            bold
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            {drink.strDrink}
          </Text>
          <CategoryTag categoryName={drink.strCategory} />
        </HStack>
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
        <Button
          onPress={() => navigation.navigate('Detail')}
          backgroundColor="$black"
          sx={{ _dark: { backgroundColor: '$white' } }}
        >
          <ButtonText color="$white" sx={{ _dark: { color: '$black' } }}>
            Ver detalles
          </ButtonText>
        </Button>
      </VStack>
    </>
  );
};

export default DrinkRandom;
