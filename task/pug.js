import pugs from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import {readFileSync} from 'fs';

import { src, dest } from '../gulpfile.js';

const pug = () =>
  src('./src/pug/*.pug')
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "PUG",
        message: error.message,
      })),
    }))
    .pipe(pugs({
      pretty: true,
      data: {
        news: [ ...JSON.parse(readFileSync('./data/data.json')) ]
      }
    }))
    .pipe(dest('./dist'));

export default pug;