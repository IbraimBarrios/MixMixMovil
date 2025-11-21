import { useColorScheme } from 'react-native';
import { Box, HStack } from '@gluestack-ui/themed';
import { SkeletonColorsBg } from '../theme/colors';

const SkeletonCategories = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = isDarkMode ? SkeletonColorsBg.dark : SkeletonColorsBg.light;

  return (
    <HStack space="md">
      <Box w="$20" h="$10" bg={bgColor} rounded="$sm" />
      <Box w="$24" h="$10" bg={bgColor} rounded="$sm" />
      <Box w="$24" h="$10" bg={bgColor} rounded="$sm" />
      <Box w="$16" h="$10" bg={bgColor} rounded="$sm" />
    </HStack>
  );
};

export default SkeletonCategories;
