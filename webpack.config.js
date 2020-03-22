const path = require('path')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'public/dist')
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'initial'
    }
  }
}
