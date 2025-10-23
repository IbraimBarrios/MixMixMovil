import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import MiniatureDrinkImg from '../MiniatureDrinkImg';
import CategoryTag from '../CategoryTag';
import DrinkTypeLabel from '../DrinkTypeLabel';

type DrinkCardProps = {
  name: string;
  url: string;
};

const DrinkCard = ({ name, url }: DrinkCardProps) => {
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
      <VStack flex={1} space="md">
        <HStack justifyContent="space-between" alignItems="center">
          <CategoryTag />
          <Box mr="$2">
            <DrinkTypeLabel />
          </Box>
        </HStack>
        <Text bold fontSize="$lg">
          {name}
        </Text>
      </VStack>
    </HStack>
  );
};

export default DrinkCard;
