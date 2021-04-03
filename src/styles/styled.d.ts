import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      secondaryTransparent: string;
      secondaryShadow: string;
      lineGray: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      DarkRed: string;
      green: string;
      DarkGreen: string;
      blue: string;
      DarkBlue: string;
      TwitterBlue: string;
    };
  }
}
