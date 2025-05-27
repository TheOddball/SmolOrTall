import gulp from 'gulp';
import zip from 'gulp-zip';

export default () => (
  gulp.src('src/*')
      .pipe(zip('Gwen\'s Smol or Tall for Females.pmp'))
      .pipe(gulp.dest('./dist/'))
)