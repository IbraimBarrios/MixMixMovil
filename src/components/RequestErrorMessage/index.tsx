import { AlertCircleIcon, Icon, Text, VStack } from '@gluestack-ui/themed';

type RequestErrorMessageProps = {
  text?: string;
};

const RequestErrorMessage = ({ text }: RequestErrorMessageProps) => {
  return (
    <VStack space="sm" alignItems="center" justifyContent="center">
      <Icon as={AlertCircleIcon} color="$red600" size="xl" />
      <Text color="$red600">{text ? text : 'Error de solicitud.'}</Text>
    </VStack>
  );
};

export default RequestErrorMessage;
