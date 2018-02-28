/*jslint es6 */
let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let config = require("./config");

// including routes files
let routes = require('./routes/route.js');
let auth = require('./routes/auth.js');

let app = express();
let server = require('http');

//Swagger UI
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.json');
// const swaggerDocument = require('./swagger.yaml');
let options = {
    explorer : true
};

//Including Winston
let winston = require("winston");
require("winston-loggly-bulk");
winston.add(winston.transports.Loggly, config.winston_conf);

let port = process.env.port || 8000;
let backend = server.createServer(app).listen(port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));
app.post('/login', auth.login);
app.use('/api', routes);

console.log("Express Server on port = " + port);
// winston.log("info", "Express Server on port = " + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;