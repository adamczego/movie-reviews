require('dotenv').config({ path: '../.env.dev' })
require('jest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const supertest = require('supertest')
const jwt = require('jsonwebtoken')

const app = require('../src/server')



const request = supertest(app)

let mongoServer

const databaseName = 'movie_review_test'



async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany()
  }
}

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri() + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})


it('checks if Jest works', () => {
  expect(1).toBe(1)
})

describe('/api/reviews', ()=> {

  describe('given idt', () => {
    const idt = jwt.sign({ name: 'asd' }, process.env.TOKEN_SECRET)

    test('returns inserted review on insert', async () => {
      const res = await request
        .post('/api/reviews')
        .set('Cookie', [ 'idt=' + idt ])
        .set({ 'Content-Type': 'application/json' })
        .set({ credentials: 'include' })
        .send({
          review: {
            body: 'here is some review for a movie',
            author: '108119665129465060839',
            movieId: '379686',
            movieTitle: 'asd'
          }
        })

      expect(res.statusCode).toBe(200)
      expect(res.body).toBeDefined()
    })

  })

})
