import 'typescript';
export function useClient() {
  // ...
}

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.lens.dev/graphql',
  }),
});

export default client;