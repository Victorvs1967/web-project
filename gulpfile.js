import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from './config/paths.js';
import app from './config/app.js';

import clear from './task/clear.js';
import pug from './task/pug.js';
import styles from './task/styles.js';
import scripts from './task/scripts.js';
import image from './task/image.js';
import font, { otf2ttf, fontsStyle } from './task/font.js';

export const { src, dest, watch, series, parallel } = gulp;
const browsersync = browserSync.create();

const watcher = () => {
  watch(path.pug.watch, pug).on('all', browsersync.reload);
  watch(path.sass.watch, styles).on('all', browsersync.reload);
};

const server = () =>
  browsersync.init({
    server: {
      baseDir: path.root,
    }
  });

export const fonts = series(otf2ttf, font, fontsStyle);

export const build = series(
  clear,
  parallel(fonts, image),
  parallel(scripts, styles, pug)
);

export const dev = series(
  build, 
  parallel(watcher, server)
);

export default app.isProd ? build : dev;