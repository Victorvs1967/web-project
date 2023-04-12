import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

import { src, dest } from '../gulpfile.js';
import path from '../config/paths.js';
import app from '../config/app.js';

const scripts = () =>
  src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Js",
        message: error.message,
      })),
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest), { sourcemaps: app.isDev });

export default scripts;