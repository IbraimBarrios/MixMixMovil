import { Button, ButtonText, HStack, Text, VStack } from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';
import CategoryTag from '../../components/CategoryTag';
import { useNavigation } from '@react-navigation/native';

const DrinkRandom = () => {
  const navigation = useNavigation();

  return (
    <>
      <DrinkImage
        url="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
        variant="wide"
      />
      <VStack space="md" marginTop="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Text
            size="xl"
            bold
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            Mojito
          </Text>
          <CategoryTag />
        </HStack>
        <Text
          size="md"
          lineHeight="$md"
          color="$black"
          sx={{ _dark: { color: '$white' } }}
        >
          Muddle mint leaves with sugar and lime juice. Add a splash of soda
          water and fill the glass with cracked ice. Pour the rum and top with
          soda water.
        </Text>
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
