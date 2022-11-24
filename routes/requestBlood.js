import express from 'express'
import { RequestBloodController } from '../controllers/RequestBloodController.js'
import isAuth from '../middlewares/AuthMiddleware.js'
import isAdmin from '../middlewares/AdminMiddleware.js'
import isSuperAdmin from '../middlewares/SuperAdminMiddleware.js'

const requestBloodRouter = express.Router()

requestBloodRouter.post('/', RequestBloodController.addRequestBlood)
requestBloodRouter.get('/', isAuth, RequestBloodController.getPendingRequests)
requestBloodRouter.get('/:id', RequestBloodController.getRequestBlood)
requestBloodRouter.get('/all/accepted', [isAuth, isAdmin], RequestBloodController.getAcceptedRequests)
requestBloodRouter.delete('/:id', isAuth, RequestBloodController.deleteRequest)
requestBloodRouter.put('/markAsAccepted/list', isAuth, RequestBloodController.markAsAccepted)
requestBloodRouter.put('/all/:id', isAuth, RequestBloodController.updateRequestBlood)
requestBloodRouter.patch('/:id', [isAuth, isAdmin], RequestBloodController.updateRequestStatus)

export default requestBloodRouter
