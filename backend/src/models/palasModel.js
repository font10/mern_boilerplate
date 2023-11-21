import mongoose from 'mongoose'

const palasSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  forma: {
    type: String,
    required: true,
  },
  tacto: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false } )

export default mongoose.model("Palas", palasSchema)
