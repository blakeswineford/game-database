import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.bg' : 'light.bg',
      },
    }),
  },
  colors: {
    dark: {
      bg: '#000000',
    },
    light: {
      bg: '#F9F9F9',
      // bg: '#FAFAFA', for off-white
      // bg: '#F8F7F3', Mercedes paper white
      // bg: '#F9F9F9', Apople's Ghost White
      // bg: '#FAFAFB', Original color
    },
  },
});

export default theme;
