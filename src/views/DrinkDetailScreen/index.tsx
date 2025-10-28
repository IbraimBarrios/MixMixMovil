import { Box, SafeAreaView, Text } from '@gluestack-ui/themed';

const DrinkDetailScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <Box padding="$3">
        <Text color="$black" sx={{ _dark: { color: '$white' } }}>
          Detalles del cocktail
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default DrinkDetailScreen;
