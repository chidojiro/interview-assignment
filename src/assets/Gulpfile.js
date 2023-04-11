const gulp = require('gulp');
const buildStyle = require('@ffw/randstad-local-orbit/gulp-utils/utils/build-style');
const config = require('./config.json');

// build : css
gulp.task('build:css', () => {
  const src = [`${config.css.src}/*.scss`];

  return buildStyle(src, config.css.build);
});

gulp.task('build', gulp.series(gulp.parallel('build:css')));
