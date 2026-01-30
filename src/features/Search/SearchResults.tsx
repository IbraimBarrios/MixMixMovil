import { Box, Text } from '@gluestack-ui/themed';

const SearchResults = () => {
  return (
    <Box>
      <Text size="md" bold color="$black" sx={{ _dark: { color: '$white' } }}>
        Explorar
      </Text>
    </Box>
  );
};

export default SearchResults;
