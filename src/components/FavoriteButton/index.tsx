import { Button, ButtonIcon, FavouriteIcon } from '@gluestack-ui/themed';
import useFavoriteDrinks from '../../hooks/useFavoriteDrinks';

type FavoriteButtonProps = {
  idDrink: string;
};

const FavoriteButton = ({ idDrink }: FavoriteButtonProps) => {
  const { isFavoriteDrink, toggleFavoriteDrink } = useFavoriteDrinks(idDrink);

  const handleFavoritePress = () => {
    toggleFavoriteDrink();
  };

  return (
    <>
      <Button
        size="md"
        borderRadius="$full"
        w="$10"
        h="$10"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$white"
        onPress={handleFavoritePress}
      >
        <ButtonIcon
          as={FavouriteIcon}
          color={isFavoriteDrink ? '$red500' : '$black'}
        />
      </Button>
    </>
  );
};

export default FavoriteButton;
