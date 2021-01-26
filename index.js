require('dotenv').config()
const express = require('express')
const twitch = require('./components/twitch.js')

const app = express()
const port = process.env.PORT || 3000

twitch.init()

app.listen(port, console.log('Express server started'))
