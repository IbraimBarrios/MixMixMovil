import React from 'react';
// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { StatusBar, useColorScheme } from 'react-native';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const styles = getStyles(isDarkMode);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box paddingHorizontal="$2">
        <Text size="2xl" bold color="$black" mb="$4">
          ¡MixMix funcionando! 🍹
        </Text>
        <Button>
          <ButtonText>Botón de prueba</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
    // <SafeAreaView>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <View style={styles.viewContainer}>
    //     <Text style={styles.text}>MixMix</Text>
    //   </View>
    // </SafeAreaView>
  );
};

// const getStyles = (isDarkMode: boolean) => {
//   return StyleSheet.create({
//     container: { flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' },
//     viewContainer: { paddingLeft: 12, paddingRight: 12 },
//     text: {
//       fontSize: 16,
//       color: isDarkMode ? '#fff' : '#000',
//       fontWeight: 'bold',
//     },
//   });
// };

export default HomeScreen;
