const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const logging = require('./project_modules/logging.js')
logging.configure(app)

const routing = require('./project_modules/routing.js')
routing.configure(app)

app.listen(8080, () => {
    console.log('NOID',`App running on port ${8080}.`)
})
