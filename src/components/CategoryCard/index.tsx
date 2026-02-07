import { Image, StyleSheet } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';

type CategoryCardProps = {
  name: string;
  url: string;
};

const CategoryCard = ({ name, url }: CategoryCardProps) => {
  return (
    <Box position="relative">
      <Box position="absolute" zIndex={10} top="$4" left="$4">
        <Text
          color="$black"
          fontSize="$md"
          bold
          sx={{ _dark: { color: '$white' } }}
        >
          {name}
        </Text>
      </Box>
      <Image
        alt="category"
        style={styles.image}
        source={{
          uri: url,
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 16,
  },
});

export default CategoryCard;
