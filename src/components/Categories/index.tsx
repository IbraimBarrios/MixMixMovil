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
              borderRadius="$lg"
              onPress={() => setSelectedCategory(item)}
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
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default Categories;
