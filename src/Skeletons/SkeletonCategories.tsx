import { Box, HStack } from '@gluestack-ui/themed';

const SkeletonCategories = () => {
  return (
    <HStack space="md">
      <Box w="$20" h="$10" bg="$trueGray200" rounded="$sm" />
      <Box w="$24" h="$10" bg="$trueGray200" rounded="$sm" />
      <Box w="$24" h="$10" bg="$trueGray200" rounded="$sm" />
      <Box w="$16" h="$10" bg="$trueGray200" rounded="$sm" />
    </HStack>
  );
};

export default SkeletonCategories;
