import React from 'react';
import { Text as TextBase } from '@gluestack-ui/themed';
import { useColorScheme } from 'react-native';

// TODO: text component with light and dark support

type TextProps = React.ComponentProps<typeof TextBase>;

const Text = (props: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? '$white' : '$black';

  return <TextBase color={color} {...props} />;
};

export default Text;
