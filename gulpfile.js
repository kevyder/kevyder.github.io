var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('css-minify', function () {
    gulp.src('css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('final_js'));
});

gulp.task('default', ['sass', 'css-minify', 'scripts']);
