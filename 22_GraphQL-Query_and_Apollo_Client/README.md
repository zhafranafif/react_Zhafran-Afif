## Summary Materi GraphQL Query and Apollo Client

1. Apollo Client
> Apollo Client adalah library state management komprehensif untuk Javascript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan
> GraphQL. Gunakan untuk mengambil, menyimpan cache, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis.

2. Apollo Client ReactJS Setup
- Go to src folder and install @apollo/client and graphql using npm install
- Create Apollo-client.js file inside src folder
- create ApolloClient configuration and export

3. Apollo Client Query
- Import gql and useQuery and then write your query, or you can copy the query from hasura console instead.
- Get initial dadta by doing query on the server, call useQuery on top of your code
- Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.