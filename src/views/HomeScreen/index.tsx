import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Divider,
  HStack,
  SafeAreaView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { StatusBar, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkImage from '../../components/DrinkImage';
import Categories from '../../components/Categories';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box
        padding="$3"
        sx={{
          _dark: { backgroundColor: '$backgroundDark950' },
        }}
      >
        <DrinkImage />
        <VStack space="md" marginTop="$4">
          <HStack justifyContent="space-between" alignItems="center">
            <Text size="xl" bold color="$black">
              Mojito
            </Text>
            <Box padding={4} backgroundColor="#eaeaea" borderRadius={6}>
              <Text size="sm" color="$black">
                Cocktail
              </Text>
            </Box>
          </HStack>
          <Text>
            Muddle mint leaves with sugar and lime juice. Add a splash of soda
            water and fill the glass with cracked ice. Pour the rum and top with
            soda water.
          </Text>
          <Button onPress={() => navigation.navigate('Detail')}>
            <ButtonText>Ver detalles</ButtonText>
          </Button>
        </VStack>
        <Divider my="$4" />
        <Categories />
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
