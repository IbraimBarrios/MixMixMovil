import { useEffect, useMemo } from 'react';
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';
import CategoryTag from '../../components/CategoryTag';
import { useNavigation } from '@react-navigation/native';
import useGetData from '../../hooks/useGetData';
import { API_BASE_V1 } from '../../utils/constants';
import { Drink } from '../../types/drink';
import SkeletonDrinkRandom from '../../Skeletons/SkeletonDrinkRandom';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import RequestErrorMessage from '../../components/RequestErrorMessage';

const renderCenteredBox = (children: React.ReactNode) => {
  return (
    <Box height={200} alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

type DrinkResponse = {
  drinks: Drink[];
};

const DrinkRandom = () => {
  const navigation = useNavigation();
  const { data, error, isLoading, fetchData } = useGetData<DrinkResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/random.php`);
  }, []);

  const drink = useMemo(() => data?.drinks[0] || null, [data]);

  if (isLoading) return <SkeletonDrinkRandom />;

  if (error) {
    return renderCenteredBox(
      <RequestErrorMessage text="Error de solicitud de bebida." />,
    );
  }

  if (!drink) {
    return renderCenteredBox(
      <EmptyResultMessage text="No se encontró ninguna bebida." />,
    );
  }

  return (
    <VStack space="md">
      <DrinkImage url={drink.strDrinkThumb} variant="wide" />
      <VStack space="md">
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
            numberOfLines={3}
            ellipsizeMode="tail"
            sx={{ _dark: { color: '$white' } }}
          >
            {drink.strInstructionsES}
          </Text>
        ) : null}
        <Button
          onPress={() =>
            navigation.navigate('Detail', { drinkId: drink.idDrink })
          }
          backgroundColor="$black"
          sx={{ _dark: { backgroundColor: '$white' } }}
        >
          <ButtonText color="$white" sx={{ _dark: { color: '$black' } }}>
            Ver detalles
          </ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export default DrinkRandom;
