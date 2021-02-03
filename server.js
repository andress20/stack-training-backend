require('dotenv').config()
const { connect } = require('./src/db')
const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/graphql/schema')
const Query = require('./src/graphql/resolvers/Query')
const Mutation = require('./src/graphql/resolvers/Mutation')

const port = process.env.PORT || 8000
connect()

const resolvers = {
  Query,
  Mutation
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen({ port }, () => {
    console.log(`Server running on http://localhost:${port}`)
  })

