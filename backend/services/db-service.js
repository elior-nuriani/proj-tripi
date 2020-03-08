
const MongoClient = require('mongodb').MongoClient;

const config  =  require('../config')
// Connection URL
// const url = (false && process.env.NODE_ENV === 'production')? 
// 'mongodb+srv://travel777:@cluster0-52zqr.mongodb.net/test?retryWrites=true&w=majority':
// 'mongodb://localhost:27017';


module.exports = {
    getCollection
}

// Database Name
const dbName = 'Travel';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(config.dbURL, {useNewUrlParser: true
         , useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        // console.log('Cannot Connect to DB Msg !', err)
        throw err;
    }
}




