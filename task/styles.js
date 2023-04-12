import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpCss from 'gulp-webp-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

import { src, dest } from '../gulpfile.js';
import path from '../config/paths.js';
import app from '../config/app.js';

const sass = gulpSass(dartSass)

const styles = () =>
  src(path.sass.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SASS",
        message: error.message,
      })),
    }))
    .pipe(sass(app.sass))
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(rename(app.rename))
    .pipe(dest(path.sass.dest));

export default styles;