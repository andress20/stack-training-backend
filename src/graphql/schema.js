const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(_id: ID): User
  }

  type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(_id: ID!): User!
    updateUser(_id: ID!, input: UserInputUpdate!): User!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input UserInputUpdate {
    name: String
    email: String
  }
`
module.exports = { typeDefs }
