const { resolve } = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'one-more-util.js',
    library: 'omUtils',
    libraryTarget: 'umd',
  },
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // TODO ...
  }

  if (argv.mode === 'production') {
    config.output.filename = 'one-more-util.min.js'
  }
  console.log(`build: ${argv.mode}`)
  return config
}
