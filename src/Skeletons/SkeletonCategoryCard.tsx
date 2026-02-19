import { FlatList, StyleSheet, useColorScheme } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import { SkeletonColorsBg } from '../theme/colors';

const SkeletonCategoryCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = isDarkMode ? SkeletonColorsBg.dark : SkeletonColorsBg.light;

  const skeletonData = Array.from({ length: 8 });

  return (
    <FlatList
      data={skeletonData}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      renderItem={() => (
        <Box w="48%">
          <Box height={120} borderRadius="$md" bg={bgColor} />
        </Box>
      )}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: { justifyContent: 'space-between' },
  contentContainer: { gap: 12 },
});

export default SkeletonCategoryCard;
