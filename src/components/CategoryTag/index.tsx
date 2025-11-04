import { Box, Text } from '@gluestack-ui/themed';

type CategoryTagProps = {
  categoryName: string;
};

const CategoryTag = ({ categoryName }: CategoryTagProps) => {
  return (
    <Box
      paddingVertical="$1"
      paddingHorizontal="$2"
      backgroundColor="#eaeaea"
      borderRadius="$md"
    >
      <Text size="xs" color="$black">
        {categoryName}
      </Text>
    </Box>
  );
};

export default CategoryTag;
