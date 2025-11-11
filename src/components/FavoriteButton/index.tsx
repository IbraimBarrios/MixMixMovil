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
        backgroundColor="$black"
      >
        <ButtonIcon as={FavouriteIcon} />
      </Button>
    </>
  );
};

export default FavoriteButton;
