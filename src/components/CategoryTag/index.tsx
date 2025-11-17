import { Box, Text } from '@gluestack-ui/themed';

type CategoryTagProps = {
  category: string;
};

const CategoryTag = ({ category }: CategoryTagProps) => {
  return (
    <Box
      alignSelf="flex-start"
      paddingVertical="$1"
      paddingHorizontal="$2"
      backgroundColor="#eaeaea"
      borderRadius="$md"
    >
      <Text size="xs" color="$black">
        {category}
      </Text>
    </Box>
  );
};

export default CategoryTag;
