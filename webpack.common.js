const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        loader: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicons.svg',
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      $: ('jquery'),
      jQuery: ('jquery'),
    }),

    // Add your plugins here
    // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
  ],
}
