// library imports
const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

// module imports
const routes = require('./routes');

// middleware imports
const handleError = require('./middlewares/handleError');

// create a new express application instance
const app = express();

// use cookie parser
//app.use(cookieParser());

// set template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// bodyparser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public folder
app.use(express.static('public'));1

app.use(session({
    secret: 'myblog',
    resave: false,
    saveUninitialized: true
}));

app.use('/', routes); // bind routes
app.use(handleError); // // error handler middleware

// start server
const port = process.env.PORT ? parseInt(process.env.PORT) : 80;

app.listen(port, function () {
    console.log('App running on port ' + port);
});
