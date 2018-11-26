var gulp = require('gulp');
var watch = require('gulp-watch');

var browserify = require('browserify');
var babelify = require('reactify');
var source = require('vinyl-source-stream');

const js_src ='./source/';

gulp.task('default', function() {
    return   browserify(js_src+'app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'))
});


gulp.task('watch', function () {
    return gulp.watch(js_src+'**/*.js', ['default']);
});
