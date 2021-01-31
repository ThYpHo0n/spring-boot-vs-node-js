const db = require('./db')
const { body, validationResult } = require('express-validator');
const fs = require('fs')
const encrypt = require('./encrypt')
const jwt = require('./jwt');

const configure = (app) => {

    app.get('/', jwt.checkToken, (request, response) => {
        response.json({ info: 'Node.js, Express, and Postgres API' })
    })

    app.post('/login', jwt.login);

    app.get('/books', jwt.checkToken, db.getBooks)

    app.get('/books/:isbn', jwt.checkToken, db.getBookByISBN)

    app.post('/books', jwt.checkToken,

        body('title').isLength({min: 5}),
        body('author').isLength({min: 5}),
        body('isbn').isLength({min: 10}),
        body('year').isNumeric(),

        ((req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            db.createBook(req,res)

        }))

    app.get('/encrypt',jwt.checkToken,  (req,res) =>{

        let readStream = fs.createReadStream('./resources/nodejs-spring-logo.png', 'utf8');
        let data;
        readStream.on('data', function(chunk) {
            data += chunk;
        }).on('end', function() {
            for(let i=0;i<100;i++){
                encrypt.encrypt(data)
            }
            res.json({ encrypt: true })
        });

    })

}

module.exports = {
    configure
}