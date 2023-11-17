import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/v1/index.js'
import { connectDB } from './config/db.js'
import { errorHandler } from './helpers/errorHandler.js'

const PORT = process.env.PORT || 5000

dotenv.config()
const app = express();

//? MongoDB connection
connectDB();

//? Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', router)
app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the API</h1>')
})


app.listen(PORT, () => {
  console.log(`Running port on ${PORT}`)
})