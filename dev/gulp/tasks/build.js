// == Build Tasks == //
module.exports = function (gulp, $, config) {
    gulp.task('babel', function () {
        return gulp.src([config.sourceDir + '/*.js', config.sourceDir + '/**/*.js'])
            .pipe($.babel({
              plugins: ['transform-object-assign'],
              comments: false,
              minified: true,
              presets: ['es2015']
            }))
            .pipe(gulp.dest(config.destinationDir));
    });
};
