const mongoose = require('mongoose')

async function connect() {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017'
  const options = {
    dbName: 'stack-training',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  try {
    mongoose.connect(mongoURI, options)

    mongoose.connection.once('open', () => {
      console.log('connection established sucessfully')
    })
  } catch(error) {
    handleError(error)
    mongoose.connection.on('error', (error) => {
      console.log('something went wrong', error)
    })
  }finally {
    return mongoose.connection
  }
}

module.exports = { connect }
