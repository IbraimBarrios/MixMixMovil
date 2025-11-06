import React from 'react';
import {
  Box,
  Divider,
  SafeAreaView,
  VStack,
} from '@gluestack-ui/themed';
import { ScrollView, StatusBar, useColorScheme } from 'react-native';
import DrinkCard from '../../components/DrinkCard';
import DrinkRandom from '../../features/DrinkRandom';
import Categories from '../../features/Categories';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <Box
          padding="$3"
          sx={{
            _dark: { backgroundColor: '$backgroundDark950' },
          }}
        >
          {/* Secction DrinkRandom */}
          <DrinkRandom />
          <Divider my="$4" />
          {/* Secction Categories */}
          <Categories />
          {/* Secction Drinks */}
          <VStack space="md" mt="$4">
            <DrinkCard
              name="Old Fashioned"
              url="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
            />
            <DrinkCard
              name="Boston Sidecar"
              url="https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg"
            />
            <DrinkCard
              name="Negroni"
              url="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
            />
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
