import express from 'express'
import userRouter from './usersRoutes.js'
import authRouter from './authRoutes.js'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)

router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'Not found' })
})

export default router