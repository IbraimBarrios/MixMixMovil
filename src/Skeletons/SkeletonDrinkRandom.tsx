import { useColorScheme } from 'react-native';
import { Box, HStack, VStack } from '@gluestack-ui/themed';
import { SkeletonColorsBg } from '../theme/colors';

const SkeletonDrinkRandom = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = isDarkMode ? SkeletonColorsBg.dark : SkeletonColorsBg.light;

  return (
    <VStack space="md">
      <Box w="$full" h={200} bg={bgColor} rounded="$lg" />
      <HStack alignItems="center" justifyContent="space-between">
        <Box w="$1/4" h="$4" bg={bgColor} rounded="$sm" />
        <Box w="$1/5" h="$4" bg={bgColor} rounded="$sm" />
      </HStack>
      <Box w="$2/5" h="$5" bg={bgColor} rounded="$sm" />
      <VStack space="sm">
        <Box w="$full" h="$4" bg={bgColor} rounded="$sm" />
        <Box w="$5/6" h="$4" bg={bgColor} rounded="$sm" />
      </VStack>
      <Box w="$full" h="$12" bg={bgColor} rounded="$sm" />
    </VStack>
  );
};

export default SkeletonDrinkRandom;
