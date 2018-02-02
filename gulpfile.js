var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watchify = require('watchify');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles', () => {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
});

gulp.task('assets', () => {
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
});

function compile(watch){
    var bundle = watchify(browserify('./src/index.js'));

    function rebundle(){
        bundle
            .transform(babel)
            .bundle()
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'))
    }

    if (watch) {
        bundle.on('update', ()=>{
            console.log('--> Bundling...');
            rebundle();
        })
    }
    rebundle();
}

gulp.task('build', () =>{
    return compile();
});

gulp.task('watch', ()=> {
    return compile(true);
}); 

gulp.task('default', ['styles', 'assets', 'build']);