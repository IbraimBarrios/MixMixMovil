import { Box, SafeAreaView } from '@gluestack-ui/themed';
import DrinkImage from '../../components/DrinkImage';

const DrinkDetailScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <Box padding="$3">
        <DrinkImage url="https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg" />
      </Box>
    </SafeAreaView>
  );
};

export default DrinkDetailScreen;
