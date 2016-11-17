var gulp = require('gulp');
var uglyfly = require('gulp-uglyfly');
var csso = require('gulp-csso');

gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('min-js'))
});

gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('min-css'));
});