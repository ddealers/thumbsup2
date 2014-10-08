//llamar a los modulos
var gulp = require('gulp');
var args = require('yargs').argv;
var uglify = require('gulp-uglifyjs');
var coffee = require('gulp-coffee');

var activity = args.activity;

function clas(activity){
	gulp.src([activity+'/_coffee/class/*.coffee',])
	.pipe(coffee({bare: true}))
	.pipe(uglify('classes.min.js'))
	.pipe(gulp.dest(activity+'/js/scripts/min/'));
}

function main(activity){
	gulp.src([activity+'/js/main.coffee',])
	.pipe(coffee({bare: true}))
	.pipe(uglify('main.min.js'))
	.pipe(gulp.dest(activity+'/js/'));
}

function deal(activity){
	gulp.src([activity+'/_coffee/dealersjs.coffee'])
	.pipe(coffee({bare: true}))
	.pipe(uglify('dealersjs.min.js'))
	.pipe(gulp.dest(activity+'/js/lib/'))
}

gulp.task('production', function(){
	clas(activity);
	main(activity);
	deal(activity);
	gulp.src([
		activity+'/css/**/*.*',
		activity+'/sounds/**/*.*',
		activity+'/fonts/**/*.*',
		activity+'/imgs/**/*.*',
		activity+'/js/lib/*.min.js',
		activity+'/js/lib/*.min.map',
		activity+'/js/scripts/min/*.min.js',
		activity+'/js/*.min.js',
		activity+'/index.html',
		], {base: './'})
	.pipe(gulp.dest('Bin'));
	console.log('Activity '+activity+' Complete!');
});