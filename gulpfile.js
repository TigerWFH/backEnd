var gulp = require('gulp');
var del = require('del');
var supervisor = require('gulp-supervisor');
var runSequence = require('run-sequence');
const DEVPATH = './dist';

function compilerTs() {
    var ts = require('gulp-typescript');
    var compiler = ts.createProject('./tsconfig.json');
    return compiler.src()
        .pipe(compiler())
        .js.pipe(gulp.dest(DEVPATH))
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
gulp.task('dev', (callback) => {
    runSequence('clear', 'ts-watch', 'supervisor', callback)
});

// build
gulp.task('build', (callback) => {
    runSequence('clear', 'ts', callback);
});

// run
var shell = require('gulp-shell');
gulp.task('run', ['build'], shell.task('npm start'));