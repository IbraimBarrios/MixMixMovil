import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import MiniatureDrinkImg from '../MiniatureDrinkImg';
import CategoryTag from '../CategoryTag';

type DrinkCardProps = {
  drinkId: string;
  category: string;
  name: string;
  url: string;
};

const DrinkCard = ({ drinkId, category, name, url }: DrinkCardProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail', { drinkId: drinkId });
  };

  return (
    <Pressable onPress={handlePress}>
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
            <CategoryTag category={category} />
          </VStack>
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default DrinkCard;
