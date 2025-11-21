import { Box, HStack, VStack } from '@gluestack-ui/themed';

const SkeletonDrinkDetail = () => {
  return (
    <VStack space="md">
      <Box w="$full" h={200} bg="$trueGray200" rounded="$lg" />
      <HStack alignItems="center" justifyContent="space-between">
        <Box w="$1/4" h="$4" bg="$trueGray200" rounded="$sm" />
        <Box w="$1/5" h="$4" bg="$trueGray200" rounded="$sm" />
      </HStack>
      <Box w="$2/5" h="$5" bg="$trueGray200" rounded="$sm" />
      <HStack space="sm" w="$full">
        <HStack space="sm" alignItems="center" flex={1}>
          <Box w={50} h={50} bg="$trueGray200" borderRadius="$full" />
          <Box flex={1} w="$full" h="$4" bg="$trueGray200" rounded="$sm" />
        </HStack>
        <HStack space="sm" alignItems="center" flex={1}>
          <Box w={50} h={50} bg="$trueGray200" borderRadius="$full" />
          <Box flex={1} w="$full" h="$4" bg="$trueGray200" rounded="$sm" />
        </HStack>
      </HStack>
      <VStack space="sm">
        <Box w="$full" h="$4" bg="$trueGray200" rounded="$sm" />
        <Box w="$5/6" h="$4" bg="$trueGray200" rounded="$sm" />
      </VStack>
    </VStack>
  );
};

export default SkeletonDrinkDetail;
