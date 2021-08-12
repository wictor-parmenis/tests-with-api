const request = require('supertest')
const server = require('./app')

describe('test API', () => {
    it('verify get route /', async () => {
        const res = await request(server).get('/')
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
    })
})