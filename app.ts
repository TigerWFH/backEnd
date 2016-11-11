import * as express from 'express'
import * as path from 'path'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', routes)
// app.use('/users', users)
var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.json({
        'name': 'monkey'
    })
})
app.use("/", router)
app.use(function (req: any, res: any, next: any) {
    var err: any = new Error('Not Found');
    err.status = 404;
    next(err);
})

if (app.get('env') === 'development') {
    app.use(function (err: any, req: any, res: any, next: any) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err: any, req: any, res: any, next: any) {
    res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: {}
    // });
});

module.exports = app 