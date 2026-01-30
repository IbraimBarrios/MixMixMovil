import { useState } from 'react';
import { Box, SafeAreaView, Text, VStack } from '@gluestack-ui/themed';
import { StatusBar, useColorScheme } from 'react-native';
import SearchInput from '../../features/Search/SearchInput';
import SearchResults from '../../features/Search/SearchResults';
import SearchDiscover from '../../features/Search/SearchDiscover';

const SearchScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [search, setSearch] = useState<string>('');

  return (
    <SafeAreaView
      flex={1}
      backgroundColor="$white"
      sx={{ _dark: { backgroundColor: '$backgroundDark900' } }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box
        flex={1}
        backgroundColor="$white"
        padding="$3"
        sx={{ _dark: { backgroundColor: '$backgroundDark900' } }}
      >
        <VStack space="md">
          <Text
            size="xl"
            bold
            color="$black"
            sx={{ _dark: { color: '$white' } }}
          >
            Buscar
          </Text>
          <SearchInput value={search} onChange={setSearch} />
          {search.length > 0 ? <SearchResults /> : <SearchDiscover />}
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default SearchScreen;
