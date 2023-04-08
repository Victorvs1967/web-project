import gulp from 'gulp';
import browserSync from 'browser-sync';

import clear from './task/clear.js';
import pug from './task/pug.js';

export const { src, dest, watch, series, parallel } = gulp;
const browsersync = browserSync.create();

const watcher = () => {
  watch('./src/**/*.pug', pug);
};

const server = () =>
  browsersync.init({
    server: {
      baseDir: './dist',
    }
  });

const dev = series(clear, pug, parallel(watcher, server));

export default dev;