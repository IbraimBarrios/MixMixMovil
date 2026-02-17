import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootParams';

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type CategoryCardProps = {
  name: string;
  image: ImageSourcePropType;
};

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  const navigation = useNavigation<AppNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Category', { category: name });
  };

  return (
    <Pressable onPress={handlePress}>
      <Box position="relative" flex={1}>
        <Box position="absolute" zIndex={10} top="$2" left="$4">
          <Text
            color="$black"
            fontSize="$md"
            bold
            sx={{ _dark: { color: '$white' } }}
          >
            {name}
          </Text>
        </Box>
        <Image alt="category" style={styles.image} source={image} />
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 110,
    borderRadius: 8,
  },
});

export default CategoryCard;
