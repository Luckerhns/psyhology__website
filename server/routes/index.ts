import Router from 'express'
import UserRouter from './public/UserRouter'
const router = Router()

router.use('/user', UserRouter)

export default router