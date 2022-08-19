// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
      colors: {
        red: {
          [red in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        orange: {
          [orange in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        gray: {
          [gray in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        yellow: {
          [yellow in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        green: {
          [green in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        teal: {
          [teal in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        cyan: {
          [cyan in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        purple: {
          [purple in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
        pink: {
          [pink in
            | `50`
            | `100`
            | `200`
            | `300`
            | `400`
            | `500`
            | `600`
            | `700`
            | `800`
            | `900`]: string;
        };
      };
    };
  }
}
