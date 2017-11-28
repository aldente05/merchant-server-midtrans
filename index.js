const express = require('express');
const http = require('http');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const app = express();

switch (process.env.ENV) {
    case 'development':
        break
    case 'production':
        break
    default:
        console.error('[ERROR] No ENV Specified: development or production')
        process.exit();
        break
}

app.use((req, res, next) => {
    req.env = process.env
    next()
})

// uncomment after placing your favicon in /public
// app.use(logger('dev'));
app.use(bodyParser.json());
app.disable('x-powered-by');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// catch 404 and forward to error handler
app.use('/', index);
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: err
//     });
// });

app.set('port', process.env.PORT || process.env.port);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('[NODE] service listening on port', app.get('port'))
})