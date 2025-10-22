import { HStack, Text, VStack } from '@gluestack-ui/themed';
import MiniatureDrinkImg from '../MiniatureDrinkImg';
import CategoryTag from '../CategoryTag';
import DrinkTypeLabel from '../DrinkTypeLabel';

type DrinkCardProps = {
  name: string;
  url: string;
};

const DrinkCard = ({name, url}: DrinkCardProps) => {
  return (
    <HStack space="md">
      <MiniatureDrinkImg url={url}/>
      <VStack flex={1} space="md">
        <HStack justifyContent="space-between" alignItems="center">
          <CategoryTag />
          <DrinkTypeLabel />
        </HStack>
        <Text bold fontSize="$lg" color="$black">
          {name}
        </Text>
      </VStack>
    </HStack>
  );
};

export default DrinkCard;
