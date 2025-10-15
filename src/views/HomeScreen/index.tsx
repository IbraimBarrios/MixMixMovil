import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  SafeAreaView,
  Text,
} from '@gluestack-ui/themed';
import { StatusBar, useColorScheme } from 'react-native';

const HomeScreen = () => {
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
        padding="$2"
        backgroundColor="$amber400"
        sx={{
          _dark: { backgroundColor: '$backgroundDark950' },
        }}
      >
        <Text
          size="2xl"
          bold
          color="$black"
          mb="$4"
          sx={{ _dark: { color: '$white' } }}
        >
          ¡MixMix funcionando! 🍹
        </Text>
        <Button>
          <ButtonText>Botón de prueba</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
