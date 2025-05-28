import gulp from 'gulp';
import zip from 'gulp-zip';
import jsonlint from 'gulp-jsonlint';

function fem() {
    return gulp.src('src-f/*')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter('verbose'))
        .pipe(zip('Gwen\'s Smol or Tall for Females.pmp'))
        .pipe(gulp.dest('./dist/'))
}

function masc() {
    return gulp.src('src-m/*')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter('verbose'))
        .pipe(zip('Gwen\'s Smol or Tall for Males.pmp'))
        .pipe(gulp.dest('./dist/'))
}

export default gulp.parallel(fem, masc);