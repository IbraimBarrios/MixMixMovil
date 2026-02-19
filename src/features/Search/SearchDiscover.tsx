import { useEffect, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { category } from '../../types/category';
import { API_BASE_V1 } from '../../utils/constants';
import { All_CATEGORIES } from '../../data/categories';
import useGetData from '../../hooks/useGetData';
import CategoryCard from '../../components/CategoryCard';
import SkeletonCategoryCard from '../../Skeletons/SkeletonCategoryCard';

type CategoryResponse = {
  drinks: category[];
};

const SearchDiscover = () => {
  const { data, isLoading, fetchData } = useGetData<CategoryResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/list.php?c=list`);
  }, []);

  const allCategories = useMemo(() => data?.drinks || [], [data?.drinks]);

  const resolvedCategories = useMemo(() => {
    const categories = allCategories.map(categoryItem => {
      const categoryFound = All_CATEGORIES.categories.find(
        item => item.name === categoryItem.strCategory,
      );

      return {
        ...categoryItem,
        image: categoryFound?.image ?? require('../../assets/other.png'),
      };
    });

    return categories;
  }, [allCategories]);

  if(isLoading) return <SkeletonCategoryCard />

  return (
    <>
      <Text size="lg" bold color="$black" sx={{ _dark: { color: '$white' } }}>
        Categorías
      </Text>
      <FlatList
        data={resolvedCategories}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <Box w="48%">
            <CategoryCard name={item.strCategory} image={item.image} />
          </Box>
        )}
        keyExtractor={item => item.strCategory}
      />
    </>
  );
};

const styles = StyleSheet.create({
  columnWrapper: { justifyContent: 'space-between' },
  contentContainer: { gap: 12, paddingBottom: 24 },
});

export default SearchDiscover;
