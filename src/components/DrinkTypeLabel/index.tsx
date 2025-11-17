import { Text } from '@gluestack-ui/themed';

type DrinkTypeLabel = {
  drinkType: string;
};

const drinkTypeES = (drinkType: string) => {
  return drinkType === 'Alcoholic' ? 'Alcohólico' : 'Sin alcohol';
};

const DrinkTypeLabel = ({ drinkType }: DrinkTypeLabel) => (
  <Text fontSize="$sm" color="$blueGray500" sx={{ _dark: { color: '$white' } }}>
    {drinkTypeES(drinkType)}
  </Text>
);

export default DrinkTypeLabel;
