import { useNavigation } from '@react-navigation/native';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={[
        styles.content,
        { backgroundColor: isDarkMode ? '#1E1E1E' : '#fff' },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[
          styles.viewContent,
          { backgroundColor: isDarkMode ? '#1E1E1E' : 'red' },
        ]}
      >
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
          Pagina Delles...
        </Text>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1 },
  viewContent: { flex: 1, paddingHorizontal: 12 },
});

export default DetailScreen;
