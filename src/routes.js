const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.status(200).send({message: "test with API"})
})

module.exports = routes