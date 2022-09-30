'use strict';

var gulp        = require('gulp'),
	watch       = require('gulp-watch'),
	prefixer    = require('gulp-autoprefixer'),
	uglify      = require('gulp-uglify'),
	sass        = require('gulp-sass')(require('node-sass')),
	cleanCSS    = require('gulp-clean-css'),
	reference   = require('gulp-reference'),
	rename      = require('gulp-rename'),
	sourcemaps  = require('gulp-sourcemaps'),
	fileinclude = require('gulp-file-include'),
	imagemin    = require('gulp-imagemin'),
	pngquant    = require('imagemin-pngquant'),
	rimraf      = require('rimraf'),

	path = {
		dist: {
			html:   '../',
			js:     '../js/',
			style:  '../css/',
			img:    '../img/',
			fonts:  '../fonts/',
			docs:  '../docs/'
		},
		src: {
			html:  ['src/html/**/*.html','!src/html/template/**/*.html'],
			js:    ['src/js/lib/device.js', 'src/js/lib/jquery-2.2.4.js', 'src/js/main.js'],
			style:  'src/style/main.scss',
			img:    'src/img/**/*.*',
			docs:    'src/docs/**/*.*',
			fonts:  'src/fonts/**/*.*'

		},
		watch: {
			html:   'src/html/**/*.html',
			js:     'src/js/**/*.js',
			style: ['src/style/**/*.scss', 'src/style/**/*.css'],
			img:    'src/img/**/*.*',
			docs:    'src/docs/**/*.*',
			fonts:  'src/fonts/**/*.*'
		},
		clean: [
			'../*.html',
			'../js',
			'../css',
			'../img',
			'../docs',
			'../fonts'
		]
	};

gulp.task('clean', function (cb)
{
	path.clean.forEach(function (entry) {
		rimraf(entry, cb);
	})
});

gulp.task('html:build', function ()
{
	return gulp.src(path.src.html)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			indent: true
		}))
		.pipe(gulp.dest(path.dist.html));
});

gulp.task('js:build', function ()
{
	return gulp.src(path.src.js)
		.pipe(sourcemaps.init())
		.pipe(reference())
		.pipe(gulp.dest(path.dist.js))
		.pipe(uglify())
		.pipe(rename({suffix: ".min"}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dist.js));
});

gulp.task('style:build', function ()
{
	return gulp.src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(reference())
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(prefixer(['last 25 versions', '> 1%', 'ie 9']))
		.pipe(cleanCSS({
			format: 'beautify',
			level: 2
		}))
		.pipe(rename({basename: "style"}))
		.pipe(gulp.dest(path.dist.style))
		.pipe(cleanCSS())
		.pipe(rename({suffix: ".min"}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dist.style));
});

gulp.task('image:build', function ()
{
	return gulp.src(path.src.img)
		.pipe(imagemin({
			optimizationLevel: 5,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.dist.img));
});

gulp.task('fonts:build', function()
{
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.dist.fonts))
});

gulp.task('docs:build', function()
{
	return gulp.src(path.src.docs)
		.pipe(gulp.dest(path.dist.docs))
});


gulp.task('js:dev', function ()
{
	return gulp.src(path.src.js)
		.pipe(sourcemaps.init())
		.pipe(reference())
		.pipe(rename({suffix: ".min"}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dist.js));
});

gulp.task('style:dev', function ()
{
	return gulp.src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(reference())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({
			format: 'beautify',
			level: 2
		}))
		.pipe(rename({
			basename: "style",
			suffix: ".min"
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.dist.style));
});

gulp.task('image:dev', function ()
{
	return gulp.src(path.src.img)
		.pipe(gulp.dest(path.dist.img));
});

gulp.task('build', gulp.series(
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'docs:build',
	'image:build'
));

gulp.task('dev', gulp.series(
	'html:build',
	'js:dev',
	'style:dev',
	'fonts:build',
	'docs:build',
	'image:dev'
));

gulp.task('default', gulp.series('clean', 'build'));

gulp.task('watch', function (_cb)
{
	watch(path.watch.html, 'html:build');
	watch(path.watch.style,'style:dev');
	watch(path.watch.js, 'js:dev');
	watch(path.watch.img, 'image:dev');
	watch(path.watch.fonts, 'fonts:build');
	watch(path.watch.docs, 'docs:build');

	_cb();
});