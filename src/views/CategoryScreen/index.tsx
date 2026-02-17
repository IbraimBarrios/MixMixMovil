import { StatusBar, useColorScheme } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Box, SafeAreaView } from '@gluestack-ui/themed';
import { RootStackParamList } from '../../types/rootParams';
import Category from '../../features/Category';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Category'>;

const CategoryScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const route = useRoute<DetailScreenRouteProp>();
  const { category } = route.params;

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box
        flex={1}
        backgroundColor="$white"
        paddingHorizontal="$3"
        paddingBottom="$3"
        sx={{ _dark: { backgroundColor: '$backgroundDark900' } }}
      >
        <Category category={category} />
      </Box>
    </SafeAreaView>
  );
};

export default CategoryScreen;
