/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routers';
import { useColorScheme } from 'react-native';

function App() {
  const systemColorScheme = useColorScheme();
  const colorMode = systemColorScheme || 'light';

  return (
    <GluestackUIProvider config={config} colorMode={colorMode}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
