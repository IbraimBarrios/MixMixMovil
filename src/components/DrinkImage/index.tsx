import { Image, StyleSheet } from 'react-native';

const DrinkImage = () => {
  return (
    <Image
      alt="drink"
      style={styles.image}
      source={{
        uri: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1.5,
    borderRadius: 16,
    resizeMode: 'cover',
  },
});

export default DrinkImage;
