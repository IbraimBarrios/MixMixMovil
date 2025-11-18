import { ScrollView } from 'react-native';
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
      <ScrollView alwaysBounceVertical={false} overScrollMode="never">
        <Box padding="$3">
          <DrinkDetail id={drinkId} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrinkDetailScreen;
