const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const path = require('path');

//  gulp 前端自动构建

// 1. 压缩html
gulp.task('htmlmin', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin())
        .pipe(rename(function(path) {
            path.extname = ".min.html";
        }))
        .pipe(gulp.dest('dist/html'));
});

// 2. 压缩css
gulp.task('cssmin', () => {
    return gulp.src(['./src/css/*.css'])
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('dist/css'));
});

// 3. 压缩JS
gulp.task('jsmin', () => {
    return gulp.src(['./src/js/*.js'])
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('dist/js'));
});


// 4. 压缩图片
gulp.task('imgmin', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});