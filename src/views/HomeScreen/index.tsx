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
import DrinkCard from '../../components/DrinkCard';
import CategoryTag from '../../components/CategoryTag';

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
        {/* Secction DrinkRandom */}
        <DrinkImage />
        <VStack space="md" marginTop="$4">
          <HStack justifyContent="space-between" alignItems="center">
            <Text
              size="xl"
              bold
              color="$black"
              sx={{ _dark: { color: '$white' } }}
            >
              Mojito
            </Text>
            <CategoryTag />
          </HStack>
          <Text color="$black" sx={{ _dark: { color: '$white' } }}>
            Muddle mint leaves with sugar and lime juice. Add a splash of soda
            water and fill the glass with cracked ice. Pour the rum and top with
            soda water.
          </Text>
          <Button
            onPress={() => navigation.navigate('Detail')}
            backgroundColor="$black"
            sx={{ _dark: { backgroundColor: '$white' } }}
          >
            <ButtonText color="$white" sx={{ _dark: { color: '$black' } }}>
              Ver detalles
            </ButtonText>
          </Button>
        </VStack>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
