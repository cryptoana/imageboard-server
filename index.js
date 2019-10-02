const express = require('express')
const db = require('./db')
// const bodyParser = require('body-parser')

const app = express()
const port = 4005

// app.use(bodyParser.json())

// setup app port listening
app.listen(port, () => {
  console.log(`I'm listening on port ${port} `)
})