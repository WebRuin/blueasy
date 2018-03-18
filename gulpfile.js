const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      imageop = require('gulp-image-optimization');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'))
});

gulp.task('autoprefixer', () =>
    gulp.src('build/styles/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/styles'))
);
 
gulp.task('imagemin', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('build')).on('end', cb).on('error', cb);
});

//Watch task
gulp.task('default', function() {
    gulp.watch('src/**/*.scss',['styles', 'autoprefixer', 'imagemin']);
});