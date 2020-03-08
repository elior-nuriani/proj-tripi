const userService = require('./user-service.js')

// async function getUser(req, res) {
//     const user = await userService.getById(req.params.id)
//     res.send(user)
// }
  
async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
}
async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.send({})
}

async function updateUser(req, res) {

    let user = req.body;
    const updatedUser = await userService.update(user)
    res.send(updatedUser)
  }
  
module.exports = {
    getUsers,
    deleteUser,
    updateUser
}