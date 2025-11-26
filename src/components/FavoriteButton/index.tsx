import { Button, ButtonIcon, FavouriteIcon } from '@gluestack-ui/themed';

const FavoriteButton = () => {
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
      >
        <ButtonIcon as={FavouriteIcon} color="$black" />
      </Button>
    </>
  );
};

export default FavoriteButton;
