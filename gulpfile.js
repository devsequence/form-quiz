var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    runSequence = require('gulp4-run-sequence');
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var rimraf = require("rimraf");
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var path = require('path');
var svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

gulp.task('build:clean', function(cb){
    rimraf('./dist/**/*', cb);
});


gulp.task('build:production', function () {
    var processors = [
        autoprefixer({ overrideBrowserslist: ['last 2 versions'],
            cascade: false}),
        cssnano()
    ];

    return gulp.src('./src/preview/*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', postcss(processors)))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./dist/html'));
});

gulp.task('build:move', function() {
    gulp.src('./src/static/fonts/**/*')
        .pipe(gulp.dest('./dist/static/fonts'));

    gulp.src('./src/static/js/**/*')
        .pipe(gulp.dest('./dist/static/js'));

    gulp.src('./src/static/css/**/*')
        .pipe(gulp.dest('./dist/static/css'));

    gulp.src('./src/static/images/**/*')
        .pipe(gulp.dest('./dist/static/images'));
});

gulp.task('build', function () {
    runSequence('build:clean', 'build:production', 'build:move');
});
gulp.task('dev:svg', function () {
    return gulp.src('./src/static/images/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
                $('[class]').removeAttr('class');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "icons.html"
                }
            }
        }))
        .pipe(gulp.dest('./src/html/includes/'));
});
gulp.task('dev:html', function () {
    return gulp.src('./src/html/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/preview'))
});

gulp.task('dev:css', function () {
    return gulp.src('./src/static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(rename('style.css'))
        .pipe(gulp.dest('./src/static/css'))
        .pipe(browserSync.stream());
});

gulp.task('dev:reload', function(){
    browserSync.reload();
});

gulp.task('dev:serve', function(){
    browserSync.init({
        server: {
            baseDir: './',
            directory: true
        },
        startPath: './src/preview'
    });

    watch("./src/html/**/*.html", function () {
        runSequence('dev:html', 'dev:reload');
    });

    watch("./src/static/scss/**/*.scss", function () {
        runSequence('dev:css');
    });

    watch("./src/static/js/**/*.js", function () {
        runSequence('dev:reload');
    });

    watch("./src/static/images/svg/*.svg", function () {
        runSequence('dev:svg');
    });
});
gulp.task('dev', function () {
    runSequence(['dev:html', 'dev:css'], 'dev:serve');
});



// gulp.task('svgSpriteBuild', function () {
//     return gulp.src('./src/static/images/svg/**/*.svg')
//     // minify svg
//         .pipe(svgmin({
//             js2svg: {
//                 pretty: true
//             }
//         }))
//         .pipe(cheerio({
//             run: function ($) {
//                 $('[fill]').removeAttr('fill');
//                 $('[stroke]').removeAttr('stroke');
//                 $('[style]').removeAttr('style');
//             },
//             parserOptions: {xmlMode: true}
//         }))
//         // cheerio plugin create unnecessary string '&gt;', so replace it.
//         .pipe(replace('&gt;', '>'))
//         .pipe(svgSprite({
//             mode: {
//                 symbol: {
//                     sprite: "../../sprite/sprite.svg",
//                     render: {
//                         scss: {
//                             dest:'../../sprite/_sprite.scss',
//                             template: "./src/static/scss/svg/sprite_template.scss"
//
//                         }
//                     }
//                 }
//             }
//         }))
//         .pipe(gulp.dest('./src/static/images'));
// });
