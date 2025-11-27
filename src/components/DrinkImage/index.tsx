import { Box } from '@gluestack-ui/themed';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import FavoriteButton from '../FavoriteButton';

type DrinkImageProps = {
  idDrink: string;
  url: string;
  variant?: 'square' | 'wide';
};

const DrinkImage = ({ idDrink, url, variant = 'square' }: DrinkImageProps) => {
  const variantStyle: Record<typeof variant, ImageStyle> = {
    square: { aspectRatio: 1 },
    wide: { aspectRatio: 1.6 },
  };

  return (
    <Box position="relative">
      <Box position="absolute" zIndex={10} top="$2" right="$2">
        <FavoriteButton idDrink={idDrink} />
      </Box>
      <Image
        alt="drink"
        style={[styles.image, variantStyle[variant]]}
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
    borderRadius: 16,
    resizeMode: 'cover',
  },
});

export default DrinkImage;
