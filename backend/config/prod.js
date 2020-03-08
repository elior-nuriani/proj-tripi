const {PASSWORD_ATLAS , USERNAME_ATLAS } = require('./details-helper')

module.exports = {
  "dbURL":`mongodb+srv://${USERNAME_ATLAS}:${PASSWORD_ATLAS}@cluster0-52zqr.mongodb.net/test?retryWrites=true&w=majority`
}
