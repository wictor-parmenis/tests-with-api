const express = require('express')
const cors = require('cors')
const { json } = require('express')

class AppController {
    constructor () {
        this.express = express()
        this.middlewares()
        this.routes()
    }


    middlewares () {
        this.express.use(cors())
        this.express.use(json())
    }

    routes () {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express
