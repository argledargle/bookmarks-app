const knex = require('knex')
const fixtures = require('./bookmarks-fixtures')
const app = require ('../src/App')

describe('Bookmarks Endpoints', () => {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEDT_DB_URL
        })
    })
})