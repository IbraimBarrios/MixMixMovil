import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  HStack,
  SafeAreaView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { StatusBar, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkImage from '../../components/DrinkImage';

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
        flex={1}
        padding="$3"
        backgroundColor="$amber400"
        sx={{
          _dark: { backgroundColor: '$backgroundDark950' },
        }}
      >
        <DrinkImage />
        <VStack space="md" marginVertical="$4">
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
          <Button>
            <ButtonText>Ver detalles</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
