import express from 'express'
import userRouter from './usersRoutes.js'
import authRouter from './authRoutes.js'
import filesRouter from './filesRoutes.js'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/files', filesRouter)

router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'Not found' })
})

export default router