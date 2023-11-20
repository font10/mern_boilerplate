import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true, versionKey: false } )

export default mongoose.model("User", userSchema)
