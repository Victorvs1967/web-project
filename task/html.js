import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlmin from 'gulp-htmlmin';
import fileinclude from 'gulp-file-include';

import { src, dest } from '../gulpfile.js';

const html = () =>
  src('./html/**/*.html')
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message,
      })),
    }))
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'));

export default html;