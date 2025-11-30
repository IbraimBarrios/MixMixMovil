import { StatusBar, useColorScheme } from 'react-native';
import { Box, SafeAreaView } from '@gluestack-ui/themed';
import FavoriteDrinks from '../../features/FavoriteDrinks';

const FavoritesScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box
        flex={1}
        padding="$3"
        backgroundColor="$white"
        sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
      >
        <FavoriteDrinks />
      </Box>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
