import { StatusBar, useColorScheme } from 'react-native';
import { Box, SafeAreaView, Text } from '@gluestack-ui/themed';
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
        rowGap="$3"
        backgroundColor="$white"
        sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
      >
        <Text size="xl" bold color="$black" sx={{ _dark: { color: '$white' } }}>
          Favoritos
        </Text>
        <FavoriteDrinks />
      </Box>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
