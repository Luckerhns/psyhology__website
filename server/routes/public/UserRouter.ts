import Router from 'express'
import UserController from '../../api/controllers/User.controller'

const router = Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)

export default router