import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useFavoriteDrinks from '../../hooks/useFavoriteDrinks';

type FavoriteButtonProps = {
  idDrink: string;
};

const FavoriteButton = ({ idDrink }: FavoriteButtonProps) => {
  const { isFavoriteDrink: isFavorite, toggleFavoriteDrink } =
    useFavoriteDrinks(idDrink);

  const handleFavoritePress = () => {
    toggleFavoriteDrink();
  };

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleFavoritePress}
      >
        <Icon
          name="heart"
          solid={isFavorite}
          size={18}
          color={isFavorite ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteButton;
