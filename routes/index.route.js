const express = require("express");
const app = express()
const authRoute = require('./auth.route')
const userRoute = require('./user.route.js')
const hospitalRoute = require('./hospital.route')
const bankRoute = require('./bank.route')

app.use('/auth', authRoute)

app.use('/users', userRoute)

app.use('/hospitals', hospitalRoute)

app.use('/banks', bankRoute)

module.exports = app;
