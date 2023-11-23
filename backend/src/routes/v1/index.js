import express from 'express'
import authRouter from './authRoutes.js'
import filesRouter from './filesRoutes.js'
import palasRouter from './palasRoutes.js'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/files', filesRouter)
router.use('/palas', palasRouter)

router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'Not found' })
})

export default router