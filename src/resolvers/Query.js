const User = require('../models/user.model')

module.exports = {
  async users() {
    return await User.find()
  },
  async user(_, { _id }) {
    return await User.findById(_id)
  }
}
