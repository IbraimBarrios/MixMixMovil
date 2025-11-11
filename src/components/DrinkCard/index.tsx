import { HStack, Text, VStack } from '@gluestack-ui/themed';
import MiniatureDrinkImg from '../MiniatureDrinkImg';
import CategoryTag from '../CategoryTag';

type DrinkCardProps = {
  category: string;
  name: string;
  url: string;
};

const DrinkCard = ({ category, name, url }: DrinkCardProps) => {
  return (
    <HStack
      space="md"
      borderTopLeftRadius="$2xl"
      borderBottomLeftRadius="$2xl"
      borderTopRightRadius="$lg"
      borderBottomRightRadius="$lg"
      bg="$warmGray100"
      sx={{ _dark: { bg: '$warmGray800' } }}
    >
      <MiniatureDrinkImg url={url} />
      <HStack flex={1} space="sm" alignItems="center">
        <VStack flex={1} space="sm">
          <Text
            bold
            fontSize="$lg"
            color="$black"
            numberOfLines={2}
            ellipsizeMode="tail"
            sx={{ _dark: { color: '$white' } }}
          >
            {name}
          </Text>
          <CategoryTag categoryName={category} />
        </VStack>
      </HStack>
    </HStack>
  );
};

export default DrinkCard;
