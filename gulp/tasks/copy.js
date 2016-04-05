var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var config = require('../config.js');

gulp.task('copy:js', function() {
    return gulp.src([
            config.src + 'js/**/*.js',
            '!' + config.src + 'js/helpers.js',
            '!' + config.src + 'js/helpers/**/*'
        ])
        .pipe(gulp.dest(config.build + 'js'));
});

gulp.task('copy:img', function() {
    return gulp.src(config.src + 'img/**/*')
        .pipe(gulpif(config.imagemin, imagemin()))
        .pipe(gulp.dest(config.build + 'img'));
});

gulp.task('copy:svg', function() {
    return gulp.src(config.src + 'svg/**/*')
        .pipe(gulp.dest(config.build + 'svg/originals'));
});

gulp.task('copy', ['copy:js', 'copy:img', 'copy:svg']);
