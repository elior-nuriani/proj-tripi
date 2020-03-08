const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth-middleware.js')
const {getTrip, getTrips,updateTrip} = require('./trip-controller')
const router = express.Router()

router.get('/', getTrips)
router.get('/:id', getTrip) 
router.put('/update', updateTrip)

// add trip

module.exports = router