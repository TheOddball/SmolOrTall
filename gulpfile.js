import gulp from 'gulp';
import zip from 'gulp-zip';
import jsonlint from 'gulp-jsonlint';

export default () => (
  gulp.src('src/*')
      .pipe(jsonlint())
      .pipe(jsonlint.reporter('verbose'))
      .pipe(zip('Gwen\'s Smol or Tall for Females.pmp'))
      .pipe(gulp.dest('./dist/'))
)