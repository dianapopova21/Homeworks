const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const imageMin = require('gulp-imagemin');
const minifyHTML = require('gulp-minify-html');

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
}

function minifyHtmlTask() {
    return gulp.src('./src/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function imagesTask() {
    return gulp.src('./src/images/*')
        .pipe(newer('./dist/images'))
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'))
        .pipe(browserSync.stream());
}

exports.default = gulp.series(browserSyncTask, function watchTask() {
    gulp.watch('./src/*.html', minifyHtmlTask);
    gulp.watch('./src/images/*', imagesTask);
});

