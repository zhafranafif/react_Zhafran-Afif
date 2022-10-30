import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: 'https://tender-lobster-58.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret' : 'AYNXrI5UHuK7zLw1JqmdYIcOWFagUol8L1YLgjQsxQC2RfLBzGID49upIfHId3W6'
    }
    
})

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://tender-lobster-58.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            'x-hasura-admin-secret' : 'AYNXrI5UHuK7zLw1JqmdYIcOWFagUol8L1YLgjQsxQC2RfLBzGID49upIfHId3W6'
        }
    }
}))

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client
