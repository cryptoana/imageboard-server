const express = require('express')
const db = require('./db')
const Image = require('./image/model')
const imageRouter = require('./image/router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`I'm listening on port ${port} `)
})

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)