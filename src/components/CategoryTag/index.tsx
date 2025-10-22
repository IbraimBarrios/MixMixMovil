import { Box, Text } from '@gluestack-ui/themed';

const CategoryTag = () => {
  return (
    <Box
      paddingVertical="$1"
      paddingHorizontal="$2"
      backgroundColor="#eaeaea"
      borderRadius="$md"
    >
      <Text size="xs" color="$black">
        Cocktail
      </Text>
    </Box>
  );
};

export default CategoryTag;
