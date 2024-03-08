const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./css/')) // Сохранить в папку ./css/components
}

function watchTask() {
    watch(['./sass/**/*.scss'], buildStyles); // Отслеживать все файлы .scss
}

exports.default = series(buildStyles, watchTask);
