const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'
const isDev = !isProd

console.log(process.env.NODE_ENV)

module.exports = {
  entry: {
    app: './src/main.js',
    // vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].[chunkhash].js' : 'build.js',
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash].map.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'store': path.resolve(__dirname, './src/store'),
      'pages': path.resolve(__dirname, './src/pages'),
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=fonts/[hash].[ext]' },
      { test: /\.(jpg|jpeg|png|gif)$/, loader: 'file?name=images/[hash].[ext]' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: isProd ? {
          loaders: {
            sass: ExtractTextPlugin.extract({
              loader: 'css-loader!sass-loader',
              fallbackLoader: 'vue-style-loader',
            }),
          },
        } : {},
      },
    ],
  },
  plugins: getPlugins(),
}

function getPlugins () {
  const plugins = []

  if (isProd) {
    plugins.push(new CleanWebpackPlugin(['dist']))

    plugins.push(
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, 'dist', '200.html'),
        template: path.join(__dirname, 'src', 'index.html'),
      })
    )

    plugins.push(
      new ExtractTextPlugin('styles.[hash].css')
    )
  }

  if (isDev) {

  }

  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  )

  plugins.push(
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
    })
  )

  return plugins
}
