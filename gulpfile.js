var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('imagemin', async function () {
    gulp.src('dev/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('sass', async function () {
   gulp.src('dev/scss/style.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('uglify', async function() {
  gulp.src('dev/lib/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', async function(){
    livereload.listen();

    gulp.watch('dev/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('dev/lib/*.js', gulp.series('uglify'));
    gulp.watch(['dist/css/style.css', '**/*.twig', 'dist/js/*.js'], function (files){
        livereload.changed(files)
    });
});
