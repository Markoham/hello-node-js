var nodeunit = require('gulp-nodeunit');
var gulp = require('gulp');

gulp.task('default', ['unit']);

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