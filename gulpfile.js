// 参考资料：https://segmentfault.com/a/1190000007305516
// gulp-sourcemaps就是用来生成sourcemap文件的，为了达到这一步需要注意两件事
// 1、tsconfig.json文件中必须配置outFiles（dist路径）路径和sourceMaps（true）选项
// 2. 若要生成sourcemap文件,需要在write函数中传递绝对路径(生成的JS文件最下面就是sourcemap内容)
// gulp-nodemon监听文件变更自动编译重启服务（类似supervisor,但是比supervisor好用）
var gulp = require('gulp');
var del = require('del');
var supervisor = require('gulp-supervisor');
var runSequence = require('run-sequence');
const DEVPATH = './dist';

function compilerTs() {
    var ts = require('gulp-typescript');
    var sourceMaps = require('gulp-sourcemaps');
    var compiler = ts.createProject('./tsconfig.json');
    return compiler.src()
        .pipe(sourceMaps.init())
        .pipe(compiler())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist'))
}
gulp.task('ts', () => {
    return compilerTs();
});
gulp.task('ts-watch', () => {
    compilerTs();
    var watcher = gulp.watch('./src/**/*.ts', ['ts']);
    watcher.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    return;
});

gulp.task('clear', () => {
    return del([DEVPATH]);
});

gulp.task('supervisor', () => {
    return supervisor('./bin/www', {
        watch: ['./dist'],
        pollInterval: 5000
    });
});
// develop
gulp.task('dev-giveup', (callback) => {
    runSequence('clear', 'ts-watch', 'supervisor', callback)
});
gulp.task('dev', () => {
    var nodemon = require('gulp-nodemon')
    return nodemon({
        script: './bin/www',
        watch: './src',
        tasks: ['build'], //重启任务前要执行的任务
        ext: 'ts', //监听ts文件，必须
        env: {
            'NODE_ENV': 'development'
        },
        exec: 'node --debug' //必须开启debug模式
    })
});

// build
gulp.task('build', (callback) => {
    runSequence('clear', 'ts', callback);
});

// run
var shell = require('gulp-shell');
gulp.task('run', ['build'], shell.task('npm start'));