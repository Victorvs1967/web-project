import {readFileSync} from 'fs';

const isProd = process.argv.includes('--production'),
      isDev = !isProd;
const app = {
  pug: {
      pretty: isDev,
      data: {
        news: [ ...JSON.parse(readFileSync('./data/data.json')) ]
      }
    },
    sass: {
        outputStyle: isProd ? 'compressed' : 'expanded',
    },
    fonter: {
      formats: ['ttf'],
    },
    rename: {
      basename: 'main',
      suffix: '.min',
    },
    webpack: {
      mode: isProd ? 'production' : 'development',
      output: {
        filename: 'main.min.js',
      },
    },
    imagemin: {
      verbose: true,
    }
};

export default app;