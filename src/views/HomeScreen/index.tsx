import React, { useState } from 'react';
import { Box, Divider, SafeAreaView } from '@gluestack-ui/themed';
import {StatusBar, useColorScheme } from 'react-native';
import DrinkRandom from '../../features/DrinkRandom';
import Categories from '../../features/Categories';
import Drinks from '../../features/Drinks';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [category, setCategory] = useState<string>('Cocktail');

  const handleSelectCategory = (categoryName: string) => {
    setCategory(categoryName);
  };

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
        sx={{
          _dark: { backgroundColor: '$backgroundDark950' },
        }}
      >
        {/* Secction DrinkRandom */}
        <DrinkRandom />
        <Divider my="$4" />
        {/* Secction Categories */}
        <Categories
          defaultCategorySelected={category}
          onCategory={handleSelectCategory}
        />
        {/* Secction Drinks */}
        <Box flex={1} mt="$4">
          <Drinks category={category} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
