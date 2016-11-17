import * as express from 'express'
import * as path from 'path'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import { router as root } from './routers/root'
// compoents

var app = express()

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 路由部分
app.use('/', root);
app.use(function(req: express.Request, res: express.Response, next: any) {
    var err: any = new Error('Not Found');
    err.status = 404;
    console.log(123)
    res.json({
        'err': 'err'
    })
    next(err);
})

if (app.get('env') === 'development') {
    app.use(function(err: any, req: express.Request, res: express.Response, next: any) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: any) {
    res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: {}
    // });
});


export { app } //export {app} ---编译--->exports.app = app
//export = app---编译--->module.exports = app
// ts的加载器比nodejs加载器多了一层对象，如果混合使用，需要先将ts的对象解析处理：
// name.ts文件(ts对应的导出时import)
//export function name(){...}

// name.js(tsc编译后的)
// exports.name = function name(){...}

// main.js文件,使用commonjs导入
//let name = reuire('name').name
// export {} 被编译成export.app = app 或 export.default = app
//按照commonjs对module.exports和exports的解释，
// module.exports和exports初始化指向同一对象，即{},是个空对象
// 但是require默认导入的是module.exports对象（除非修改module.exports,否者两者一直是一样的）
// 也就是说一module.exports为主，有值则忽略exports，没有值将exports值赋值给module.exports并导出
// 参考资料：https://cnodejs.org/topic/5231a630101e574521e45ef8