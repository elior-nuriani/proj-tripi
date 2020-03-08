// const bcrypt = require('bcrypt')
const userService = require('../user/user-service.js')
// const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(email, password) {
    // logger.debug(`auth.service - login with email: ${email}`)
    if (!email || !password) return Promise.reject('email and password are required!')
    
    const user = await userService.getByEmail(email)
    if (!user) return Promise.reject('Invalid email or password')
    // const match = await bcrypt.compare(password, user.password)
    // if (!match) return Promise.reject('Invalid email or password')

    const match = (user.password === password) ? true : false
    if (!match) return Promise.reject('Invalid email or password')
    delete user.password;
    return user;
}

async function signup(email,firstName, password, lastName) {
    // logger.debug(`auth.service - signup with email: ${email}, username: ${username}`)
    if (!email || !password || !lastName || !firstName) return Promise.reject('email, username and password are required!')

    // const hash = await bcrypt.hash(password, saltRounds)
    //Delte hash frpm password:hash
    return userService.add({ email,firstName, password, lastName })
}

module.exports = {
    signup,
    login,
}