const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
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
    new CleanWebpackPlugin(),
    new WebpackAssetsManifest({
      publicPath: true,
      entrypoints: true
    })
  ]
}
