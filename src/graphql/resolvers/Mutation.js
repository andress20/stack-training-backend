const User = require('../../models/user.model')

module.exports = {
  async createUser(_, { input }) {
    try {
      const user = await User.create(input)
      return user
    }catch(error) {
      return error
    }
  },
  async updateUser(_, { _id, input }) {
    return await User.findByIdAndUpdate(_id, input, {new: true, useFindAndModify: false})
  },
  async deleteUser(_, { _id }) {
    return await User.findByIdAndDelete(_id)
  }
}
