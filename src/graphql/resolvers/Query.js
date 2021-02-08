const User = require('../../models/user.model')
const bcrypt = require('bcrypt')

module.exports = {
  async users() {
    return await User.find()
  },

  async user(_, { _id }) {
    return await User.findById(_id)
  },
  
  async signIn(_, { input }) {
    try {
      const { email, password } = input
      const user = await User.findOne({ email })
      if(!user._id) {
        throw Error('Usuario o contraseña invalida')
      }
      const isValid = await bcrypt.compare( password, user.password )
      if(!isValid) {
        throw Error('Usuario o contraseña invalida')
      }
      return user
    }catch(error) {
      return error
    }
  }
}
