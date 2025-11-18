import { HStack, Image, Text } from '@gluestack-ui/themed';
import { Drink } from '../../types/drink';
import { FlatList, StyleSheet } from 'react-native';
import { URL_IMAGES } from '../../utils/constants';
import { lowerCaseText } from '../../utils/utils';

type Ingredient = {
  measure: string;
  ingredient: string;
};

type IngredientItemProps = {
  measure: string;
  ingredient: string;
};

const IngredientItem = ({ measure, ingredient }: IngredientItemProps) => {
  return (
    <HStack space="md" alignItems="center" w="$1/2">
      <Image
        w={50}
        h={50}
        borderRadius={16}
        source={{
          uri: `${URL_IMAGES}/ingredients/${lowerCaseText(
            ingredient,
          )}-medium.png`,
        }}
        alt={`ingredient-${ingredient}`}
      />
      <Text flex={1} color="$black" sx={{ _dark: { color: '$white' } }}>
        {measure} {ingredient}
      </Text>
    </HStack>
  );
};

type IngredientsList = {
  drink: Drink;
};

const IngredientsList = ({ drink }: IngredientsList) => {
  const ingredients = () => {
    const allIngredients: Ingredient[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof Drink];
      const measure = drink[`strMeasure${i}` as keyof Drink];

      if (ingredient) {
        allIngredients.push({
          measure: measure ?? '',
          ingredient,
        });
      }
    }

    return allIngredients;
  };

  return (
    <FlatList
      data={ingredients()}
      numColumns={2}
      renderItem={({ item }) => (
        <IngredientItem measure={item.measure} ingredient={item.ingredient} />
      )}
      keyExtractor={item => item.ingredient}
      columnWrapperStyle={styles.columnWrapper}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: { marginBottom: 5 },
});

export default IngredientsList;
