import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { apolloClient } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
          <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
