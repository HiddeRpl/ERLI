module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 1%', 'safari >= 9', 'ie >= 11'],
    },
    'autoprefixer': {},
    'cssnano': {},
  },
}
