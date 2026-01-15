import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.content}>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
