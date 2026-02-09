import { Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';

type CategoryCardProps = {
  name: string;
  image: ImageSourcePropType;
};

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Box position="relative" flex={1}>
      <Box position="absolute" zIndex={10} top="$2" left="$4">
        <Text
          color="$black"
          fontSize="$md"
          bold
          sx={{ _dark: { color: '$white' } }}
        >
          {name}
        </Text>
      </Box>
      <Image alt="category" style={styles.image} source={image} />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 110,
    borderRadius: 8,
  },
});

export default CategoryCard;
