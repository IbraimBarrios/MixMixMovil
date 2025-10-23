import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';

export const config = createConfig({
  ...defaultConfig,
  components: {
    ...defaultConfig.components,
    Text: {
      ...defaultConfig.components.Text,
      theme: {
        ...defaultConfig.components.Text.theme,
        color: '$black',
        _dark: { color: '$white' },
      },
    },
  },
});
