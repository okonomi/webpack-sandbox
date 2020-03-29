const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
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
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
