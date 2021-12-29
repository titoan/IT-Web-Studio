const gulp = require('gulp');
    sass = require('gulp-sass')(require('sass')),
    watch  = require('gulp-watch');
   


gulp.task('sass', async function(){
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
    });



gulp.task('js', async function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('public/js'))
})

gulp.task('html', async function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('public/'))
})

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', gulp.parallel('sass'));   
    gulp.watch('src/js/*.js', gulp.parallel('js'));
    gulp.watch('src/*.html', gulp.parallel('html')); 
});

