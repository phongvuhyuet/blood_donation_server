import express from 'express'
import { UserController } from '../controllers/UserController.js'
import isAuth from '../middlewares/AuthMiddleware.js'
import isAdmin from '../middlewares/AdminMiddleware.js'
import isSuperAdmin from '../middlewares/SuperAdminMiddleware.js'

const userRouter = express.Router()

userRouter.get('/', isAuth, UserController.getUser)
userRouter.put('/', isAuth, UserController.updateUser)
userRouter.delete('/:id', [isAuth, isSuperAdmin], UserController.deleteUser)
userRouter.post('/', [isAuth, isSuperAdmin], UserController.addUser)

export default userRouter
