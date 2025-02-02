import "@/styles/globals.css";
import { ApolloProvider, InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // or your own API endpoint
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default MyApp;
