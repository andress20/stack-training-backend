const { Schema, model, models } = require('mongoose')

const userSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      async validator(email) {
        try {
          const user = await models.User.findOne({ email })
          return !user
        }
        catch (error) {
          return false
        }
      },
      message: 'El correo ya está en uso'
    },
  },
  password: {
    type: String,
    required: true
  },
  projects: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Project'}]
  },
},{
  timestamps: true
})

const User = model('User', userSchema)

module.exports = User
