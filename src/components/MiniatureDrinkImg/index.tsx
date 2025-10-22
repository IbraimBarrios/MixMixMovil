import { Image, StyleSheet } from 'react-native';

type MiniatureDrinkImgProps = {
  url: string;
};

const MiniatureDrinkImg = ({ url }: MiniatureDrinkImgProps) => {
  return (
    <Image
      alt="drink-image"
      style={styles.image}
      source={{
        uri: url,
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: { width: 96, height: 79, borderRadius: 16 },
});

export default MiniatureDrinkImg;
