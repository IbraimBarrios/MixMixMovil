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

function App() {
  return (
    <GluestackUIProvider config={config} >
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
