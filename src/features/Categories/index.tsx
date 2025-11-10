import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Box, Button, ButtonText, HStack } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import type { category } from '../../types/category';
import useGetData from '../../hooks/useGetData';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import RequestErrorMessage from '../../components/RequestErrorMessage';
import SkeletonCategories from '../../Skeletons/SkeletonCategories';

type CategoryResponse = {
  drinks: category[];
};

type CategoriesProps = {
  defaultCategorySelected?: string;
  onCategory: (category: string) => void;
};

const Categories = ({
  defaultCategorySelected = 'all',
  onCategory,
}: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultCategorySelected,
  );
  const { data, error, isLoading, fetchData } = useGetData<CategoryResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/list.php?c=list`);
    onCategory(defaultCategorySelected);
  }, []);

  const categories = useMemo(() => data?.drinks || [], [data]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    onCategory(category);
  };

  if (isLoading) return <SkeletonCategories />;

  if (error)
    return <RequestErrorMessage text="Error al solicitar las categorias." />;

  return (
    <Box>
      {categories.length !== 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <HStack space="md">
            {[{ strCategory: 'all' }, ...categories].map((item, index) => {
              const isSelected = selectedCategory === item.strCategory;
              const categoryName =
                item.strCategory === 'all' ? 'Todos' : item.strCategory;

              return (
                <Button
                  key={index}
                  variant={isSelected ? 'solid' : 'outline'}
                  size="md"
                  borderRadius="$lg"
                  onPress={() => handleSelectCategory(item.strCategory)}
                  sx={{
                    borderColor: isSelected ? '$black' : '$blueGray300',
                    backgroundColor: isSelected ? '$black' : 'transparent',
                    _dark: {
                      borderColor: isSelected ? '$white' : '$blueGray700',
                      backgroundColor: isSelected ? '$white' : 'transparent',
                    },
                  }}
                >
                  <ButtonText
                    color={isSelected ? '$white' : '$black'}
                    sx={{
                      _dark: {
                        color: isSelected ? '$black' : '$white',
                      },
                    }}
                  >
                    {categoryName}
                  </ButtonText>
                </Button>
              );
            })}
          </HStack>
        </ScrollView>
      ) : (
        <EmptyResultMessage text="No se encontraron categorias" />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default Categories;
