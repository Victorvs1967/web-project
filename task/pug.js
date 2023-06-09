import pugs from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import { src, dest } from '../gulpfile.js';
import path from '../config/paths.js';
import app from '../config/app.js';

const pug = () =>
  src(path.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "PUG",
        message: error.message,
      })),
    }))
    .pipe(pugs(app.pug))
    .pipe(dest(path.pug.dest));

export default pug;