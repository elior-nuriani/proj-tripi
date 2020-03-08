const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth-middleware.js')
const { getUsers, deleteUser, updateUser,} = require('./user-controller.js')
const router = express.Router()

// router.get('/:id', getUser) 
router.get('/users', getUsers)
router.delete('/:id',  requireAuth, requireAdmin, deleteUser)
router.put('/update', updateUser)


module.exports = router