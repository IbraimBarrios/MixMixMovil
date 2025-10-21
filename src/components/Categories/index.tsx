import { Button, ButtonText, HStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const categories = ['Cocktail', 'Ordinary Drink', 'Punch', 'Beer', 'Cocoa'];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      <HStack space="md">
        {['all', ...categories].map((item, index) => {
          const isSelected = selectedCategory === item;
          const categoryName = item === 'all' ? 'Todos' : item;

          return (
            <Button
              key={index}
              variant={isSelected ? 'solid' : 'outline'}
              size="md"
              borderColor={isSelected ? '$black' : '$blueGray300'}
              borderRadius="$lg"
              onPress={() => setSelectedCategory(item)}
              sx={{ backgroundColor: isSelected ? '$black' : 'transparent' }}
            >
              <ButtonText color={isSelected ? '$white' : '$black'}>
                {categoryName}
              </ButtonText>
            </Button>
          );
        })}
      </HStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default Categories;
