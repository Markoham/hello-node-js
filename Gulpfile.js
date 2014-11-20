var nodeunit = require('gulp-nodeunit');
var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', ['unit', 'lint']);

gulp.task('unit', function()
{
    return gulp.src('./test/*_spec.js')
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'test'
            }
        }));
});

gulp.task('lint', function()
{
    return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});