import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from 'next/app';
import React from 'react';
import withApollo from '../../../lib';

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: 'http://mocked.com/graphql',
      cache: new InMemoryCache().restore(initialState || {})
    }) as any
)(MyApp);
