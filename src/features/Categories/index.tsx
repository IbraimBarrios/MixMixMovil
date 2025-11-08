import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonText, HStack } from '@gluestack-ui/themed';
import { API_BASE_V1 } from '../../utils/constants';
import type { category } from '../../types/category';
import useGetData from '../../hooks/useGetData';
import EmptyResultMessage from '../../components/EmptyResultMessage';
import RequestErrorMessage from '../../components/RequestErrorMessage';

type CategoryResponse = {
  drinks: category[];
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { data, error, fetchData } = useGetData<CategoryResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/list.php?c=list`);
  }, []);

  const categories = useMemo(() => data?.drinks || [], [data]);

  if (error)
    return <RequestErrorMessage text="Error al solicitar las categorias." />;

  return (
    <>
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
                  onPress={() => setSelectedCategory(item.strCategory)}
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
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default Categories;
