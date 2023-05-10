const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const routes = require('./routes/')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(cors())
app.use(cookieParser(''));
app.use(session({
    secret: '',
    saveUninitialized: true,
    resave: true
}));
app.use(fileUpload());

app.use('/', routes)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})