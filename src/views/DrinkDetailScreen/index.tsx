import { Box, HStack, SafeAreaView, Text, VStack } from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';
import CategoryTag from '../../components/CategoryTag';
import DrinkTypeLabel from '../../components/DrinkTypeLabel';

const DrinkDetailScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <Box padding="$3">
        <DrinkImage url="https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg" />
        <HStack
          paddingVertical="$4"
          alignItems="center"
          justifyContent="space-between"
        >
          <CategoryTag />
          <DrinkTypeLabel />
        </HStack>
        <VStack space="md">
          <Text
            bold
            size="2xl"
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            Boston sidecar
          </Text>

          <Text
            size="md"
            lineHeight="$md"
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus
            vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet
            turpis. Facilisis faucibus semper cras purus.
          </Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default DrinkDetailScreen;
