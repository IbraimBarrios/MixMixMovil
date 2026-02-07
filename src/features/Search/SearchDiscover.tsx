import { Text, VStack } from '@gluestack-ui/themed';
import CategoryCard from '../../components/CategoryCard';

const SearchDiscover = () => {
  return (
    <VStack space="md">
      <Text size="md" bold color="$black" sx={{ _dark: { color: '$white' } }}>
        Categorías
      </Text>
      <CategoryCard
        name="Beer"
        url="https://mixmix-vert.vercel.app/assets/beer-Da9jXoFu.png"
      />
    </VStack>
  );
};

export default SearchDiscover;
