'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});

// gulp.task('concat', function () {
//   return gulp.src('css/*.css')
//     .pipe(concatCss('app.css'))
//     .pipe(gulp.dest('final_css'));
// });

gulp.task('css-minify', function () {
    gulp.src('css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('final_css'));
});

gulp.task('default', ['sass', 'css-minify']);
