const { gql } = require('apollo-server')

const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        password: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    input LoginInput {
        username: String!
        password: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        # login(username: String!, password: String!): User!
        # createPost(body: String!): Post!
        # deletePost(postId: ID!): String!
        # createComment(postId: ID!, body:String!): String!
        # deleteComment(postId: ID!, commentId: !ID): !Post!
    }
`

module.exports = typeDefs;