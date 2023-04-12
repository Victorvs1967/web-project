import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpif from 'gulp-if';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

import { src, dest } from '../gulpfile.js';
import path from '../config/paths.js';
import app from '../config/app.js';

const image = () =>
  src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Image",
        message: error.message,
      })),
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));

export default image;