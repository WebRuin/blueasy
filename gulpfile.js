const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('src/**/*.scss',['styles']);
});