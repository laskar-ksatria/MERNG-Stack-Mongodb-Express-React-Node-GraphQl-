const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const dbConenct = require('./config/dbConnect')
const PORT = 3007

const dbConnect = require('./config/dbConnect')

//MONGO SCHEMA
const Post = require('./models/Post')

const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query {
        getPosts: [Post]
        
    }
`
const resolvers = {
    Query: {
        getPosts: async() => {
            try {
                const post = await Post.deleteMany({})
                const posts = await Post.find({})
                return posts
            } catch (error) {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

dbConnect()
    .then(res => {
        console.log(res)
        return server.listen({port: PORT})
    })
    .then(value => {
        console.log(`Server running at ${value.url}`)
    })

