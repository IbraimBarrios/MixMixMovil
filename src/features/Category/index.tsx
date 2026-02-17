import Drinks from '../Drinks';
import { Box, Text } from '@gluestack-ui/themed';

type CategoryProps = {
  category: string;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <>
      <Box
        p="$4"
        backgroundColor="rgb(9, 43, 73)"
        borderRadius="$md"
        marginBottom="$3"
      >
        <Text color="$white" bold>
          {category}
        </Text>
      </Box>
      <Drinks category={category} />
    </>
  );
};

export default Category;
