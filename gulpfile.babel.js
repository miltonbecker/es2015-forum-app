'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('transpile', () => {
    return browserify('js/app.js')
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['transpile'], () => {
    gulp.watch('js/**/*.js', ['transpile']);
});

gulp.task('default', ['transpile']);