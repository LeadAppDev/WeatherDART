import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#42a5f5';
const secondaryColor = '#5c6bc0';
const warningColor = '#f44336';
const whiteColor = '#fff';
const darkGrayColor = '#575757';
const lightgreyColor = '#9e9e9e';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: '#80d6ff',
      dark: '#0077c2',
    },
    secondary: {
      main: secondaryColor,
      light: '#8e99f3',
      dark: '#26418f',
    }
  },

  overrides: {
    MuiTypography: {
      root: {
        color: lightgreyColor,
      },
      colorPrimary: {
        color: primaryColor
      },
      colorSecondary: {
        color: secondaryColor
      },
      colorTextPrimary: {
        color: darkGrayColor
      },
      colorTextSecondary: {
        color: warningColor
      },
      colorInherit: {
        color: whiteColor
      },
    },
    MuiBadge: {
      colorPrimary: {
        color: whiteColor,
        backgroundColor: warningColor
      },
      colorSecondary: {
        color: whiteColor,
        backgroundColor: secondaryColor
      }
    },
    MuiTab: {
      root: {
        fontSize: '13px',
        fontWeight: '400',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: whiteColor,
        boxShadow: '0 -4px 12px rgba(0, 0, 0, .15)'
      }
    },
    MuiButton: {
      textPrimary: {
        color: primaryColor
      },
      textSecondary: {
        color: secondaryColor
      },
      text: {
        color: lightgreyColor
      }
    },
    MuiInputBase: {
      root: {
        color: darkGrayColor
      },
    }
  }
})

export default theme;