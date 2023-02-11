const express= require('express')

const applicationRouter = express.Router()

const applicationController = require('../Controllers/application.js')

applicationRouter.post('/createUser' , applicationController.createUser)
applicationRouter.post('/login' , applicationController.login)



module.exports =applicationRouter