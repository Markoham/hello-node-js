var gulp = require("gulp");
var jshint = require("gulp-jshint");


gulp.task("default", ['lint1', 'lint2']);

gulp.task("lint1", function() {
    gulp.src("./task-3.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("lint2", function() {
    gulp.src("./task-3_module.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});
