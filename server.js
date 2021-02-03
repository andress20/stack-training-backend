require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connect } = require('./src/db')
const { GraphQLServer } = require('graphql-yoga')
//const { graphqlHTTP } = require('express-graphql')
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')

//const app = express()
//app.set('port', (process.env.PORT || 8000))
//

const port = process.env.PORT || 8000
connect()

const resolvers = {
  Query,
  Mutation
}

const appE = express()

const app = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

//appE.use('/graphql', graphqlHTTP({
  //graphiql: true
//}))

//app.use(express.json())
//app.use(cors)

app.start({ port }, (deeds) => {
  console.log(`Server running on http://localhost:${deeds.port}`)
})

//app.listen(app.get('port'), () => {
  //console.log(`app running at http://localhost:${app.set('port')}`)
//})
