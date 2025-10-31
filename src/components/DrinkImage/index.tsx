import { Image, ImageStyle, StyleSheet } from 'react-native';

type DrinkImageProps = {
  url: string;
  variant?: 'square' | 'wide';
};

const DrinkImage = ({ url, variant = 'square' }: DrinkImageProps) => {
  const variantStyle: Record<typeof variant, ImageStyle> = {
    square: { aspectRatio: 1 },
    wide: { aspectRatio: 1.6 },
  };

  return (
    <Image
      alt="drink"
      style={[styles.image, variantStyle[variant]]}
      source={{
        uri: url,
      }}
    />
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
