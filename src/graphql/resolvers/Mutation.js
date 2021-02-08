const User = require('../../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  async createUser(_, { input }) {
    try {
      const { name, email, password } = input
      const encPassword = await bcrypt.hash( password, 8 )
      const user = await User.create({ name, email, password: encPassword })
      if(!user._id) {
        throw Error('No se logro crear el usuario')
      }
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60*60*24 }
      );
      //user.more['token'] = token
      return user
    }catch(error) {
      return error
    }
  },

  async updateUser(_, { _id, input }) {
    try {
      const user = await User.findByIdAndUpdate(_id, input, {new: true, useFindAndModify: false})
      return user
    }catch(error) {
      return error
    }
  },
  async deleteUser(_, { _id }) {
    return await User.findByIdAndDelete(_id)
  }
}
