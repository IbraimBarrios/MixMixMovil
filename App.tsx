/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>MixMix</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const getStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    container: { flex: 1 },
    viewContainer: { paddingLeft: 12, paddingRight: 12 },
    text: {
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
    },
  });
};

export default App;
