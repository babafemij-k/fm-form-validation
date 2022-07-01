// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  Button: {
    variants: {
      greenBtn: {
        backgroundColor: 'hsl(154, 59%, 51%)',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '',
        fontFamily: 'Poppins',
      },
    },
  },
  colors: {
    primary: {
      red: ' hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
    },
    accent: {
      blue: 'hsl(248, 32%, 49%)',
    },
    neutral: {
      darkBlue: ' hsl(249, 10%, 26%) ',
      grayishBlue: ' hsl(246, 25%, 77%)',
    },
  },
  fonts: {
    main: 'Poppins',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
});

export default theme;
