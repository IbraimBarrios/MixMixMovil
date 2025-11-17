import { Box, SafeAreaView } from '@gluestack-ui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootParams';
import DrinkDetail from '../../features/DrinkDetail';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DrinkDetail'>;

const DrinkDetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { drinkId } = route.params;

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <Box padding="$3">
        <DrinkDetail id={drinkId} />
      </Box>
    </SafeAreaView>
  );
};

export default DrinkDetailScreen;
