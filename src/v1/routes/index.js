import express from 'express'
import userRouter from './users.js'

const router = express.Router()

router.use('/users', userRouter)

router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'Not found' })
})

export default router