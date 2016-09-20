const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.vue', '.scss'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
}
