import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// const qlURL =  'https://graphql-api-onwbfivyot.now.sh'
const qlURL = 'https://api.graph.cool/simple/v1/cjgos5vy746q00107gy9emroh'
const client = new ApolloClient({
    link: new HttpLink({
        uri: qlURL,
    }),
    cache: new InMemoryCache(),
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
