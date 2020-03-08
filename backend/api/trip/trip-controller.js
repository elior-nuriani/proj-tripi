const tripService = require('./trip-service.js')

async function getTrip(req, res) {
    const trip = await tripService.getById(req.params.id)
    res.send(trip)
}
  
async function getTrips(req, res) {
    //Req query - for filters
    const trips = await tripService.query(req.query)
    res.send(trips)
}

async function updateTrip(req, res) {
  let trip = req.body;
  const updatedTrip = await tripService.update(trip)
  res.send(updatedTrip)
}

module.exports = {
  getTrip,
  getTrips,
  updateTrip
}