
const dbService = require('../../services/db-service.js')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,   
    update
}

async function query(filterBy = {}) {
    const collection = await dbService.getCollection('trips')
    try {
        const trips = await collection.find().toArray();
        return trips;
    } catch (err) {
        // console.log('ERROR: cannot find trips')
        throw err;
    }
}

async function getById(tripsId) {
    const collection = await dbService.getCollection('trips')
    try {
        const trip = await collection.findOne({"_id":ObjectId(tripsId)})
        return trip;
    } catch (err) {
        // console.log(`ERROR: while finding trip ${tripsId}`)
        throw err;
    }
}

async function update(trip) {
    const collection = await dbService.getCollection('trips')
    trip._id = ObjectId(trip._id);
    try {
        await collection.replaceOne({"_id":ObjectId(trip._id)}, {$set : trip})
        return trip
    } catch (err) {
        // console.log(`ERROR: cannot update trip ${trip._id}`)
        throw err;
    }
}

// function _getRndNum(){
//     return Math.random() * 1000000000;
// }