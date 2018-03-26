module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {},
		autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] }
  }
}
