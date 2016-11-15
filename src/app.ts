import * as express from 'express'
import * as path from 'path'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import { router as root } from './routers/root'
// compoents

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 路由部分
var router = express.Router();
router.get('/', (req: express.Request, res: express.Response, next: any) => {
    console.log(123)
    res.json({
        'name': 'monkey'
    })
})
app.use('/', router);
// app.use('/', root)
app.use(function (req: express.Request, res: express.Response, next: any) {
    var err: any = new Error('Not Found');
    err.status = 404;
    console.log(123)
    res.json({
        'err': 'err'
    })
    next(err);
})

if (app.get('env') === 'development') {
    app.use(function (err: any, req: express.Request, res: express.Response, next: any) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: any) {
    res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: {}
    // });
});



module.exports = app 