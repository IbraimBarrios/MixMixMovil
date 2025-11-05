import { Icon, InfoIcon, Text, VStack } from '@gluestack-ui/themed';

type EmptyResultMessage = {
  text: string;
};

const EmptyResultMessage = ({ text }: EmptyResultMessage) => {
  return (
    <VStack alignItems="center" space="sm" justifyContent="center">
      <Icon as={InfoIcon} size="xl" color="$blue500" />
      <Text color="$black" sx={{ _dark: { color: '$white' } }}>
        {text}
      </Text>
    </VStack>
  );
};

export default EmptyResultMessage;
