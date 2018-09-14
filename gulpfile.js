'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass'])
})

gulp.task('default', ['sass:watch'])
