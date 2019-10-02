const { Router } = require('express')
const Image = require('./model')

const router = new Router()

router.get('/images', (req, res, next) => {
  Image.findAll()
      .then((images) => {
        return res.status(200).send(images)
      })
      .catch(console.error)
})

module.exports = router