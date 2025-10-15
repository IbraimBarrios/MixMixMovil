import { Box, SafeAreaView, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Button, StatusBar, useColorScheme } from 'react-native';

// Note: Exmaple whith Gluestack ui
const DetailScreen = () => {
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
        backgroundColor="$amber400"
        paddingHorizontal="$3"
        sx={{ _dark: { backgroundColor: '$backgroundDark950' } }}
      >
        <Text color="$black" mb="$4" sx={{ _dark: { color: '$white' } }}>
          Detalles
        </Text>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </Box>
    </SafeAreaView>
  );
};

// Note: Example of a detail component with native React Native modules.

// const DetailScreen = () => {
//   const navigation = useNavigation();
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaView
//       edges={['bottom', 'left', 'right']}
//       style={[
//         styles.content,
//         { backgroundColor: isDarkMode ? '#1E1E1E' : '#fff' },
//       ]}
//     >
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <View
//         style={[
//           styles.viewContent,
//           { backgroundColor: isDarkMode ? '#1E1E1E' : 'red' },
//         ]}
//       >
//         <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
//           Pagina Delles...
//         </Text>
//         <Button title="Regresar" onPress={() => navigation.goBack()} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   content: { flex: 1 },
//   viewContent: { flex: 1, paddingHorizontal: 12 },
// });

export default DetailScreen;
