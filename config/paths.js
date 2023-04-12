const src = './src',
      dest = './dist';

const path = {
  root: dest,
  src: src,
  pug: {
    src: src.concat('/pug/*.pug'),
    watch: src.concat('/pug/**/*.pug'),
    dest: dest,
  },
  sass: {
    src: src.concat('/sass/*.sass'),
    watch: src.concat('/sass/**/*.sass'),
    dest: dest.concat('/css'),
  },
  js: {
    src: src.concat('/scripts/*.js'),
    watch: src.concat('/scipts/**/*.js'),
    dest: dest.concat('/js'),
  },
  font: {
    src: src.concat('/fonts/*.{ttf,otf,woff,woff2,svg}'),
    dest: dest.concat('/font/'),
  },
  img: {
    src: src.concat('/images/*.{jpg,jpeg,png,svg,gif,webp}'),
    watch: src.concat('/image/**/*.{jpg,jpeg,png,svg,gif,webp}'),
    dest: dest.concat('/img/'),
  },
};

export default path;