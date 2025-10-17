import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  SafeAreaView,
  Text,
} from '@gluestack-ui/themed';
import { Image, StatusBar, useColorScheme } from 'react-native';
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
        <Text
          size="2xl"
          bold
          color="$black"
          mb="$4"
          sx={{ _dark: { color: '$white' } }}
        >
          ¡MixMix funcionando! 🍹
        </Text>
        <Button onPress={() => navigation.navigate('Detail')}>
          <ButtonText>Botón de prueba</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
