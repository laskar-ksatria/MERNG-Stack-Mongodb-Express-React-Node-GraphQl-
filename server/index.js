const { ApolloServer } = require('apollo-server')
const dbConnect = require('./config/dbConnect')
const PORT = 3007
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

dbConnect()
    .then(res => {
        console.log(res)
        return server.listen({port: PORT})
    })
    .then(value => {
        console.log(`Server running at ${value.url}`)
    })

