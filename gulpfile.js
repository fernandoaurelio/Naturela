var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Task para Sass
gulp.task('sass', function(){
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
	.pipe(gulp.dest('./css'));
});

//Task para Watch

gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass',['sass']);
});

// Task Default
gulp.task('default',['sass', 'watch']);