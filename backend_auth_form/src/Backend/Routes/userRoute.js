const express = require('express')
const { registerUser, authUser } = require('../Controllers/userController')
// const UserData = require('../data/data')
const routes = express.Router()


routes.post('/users', registerUser)
routes.post('/login', authUser)



module.exports = routes