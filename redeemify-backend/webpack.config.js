const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const environment = env.NODE_ENV || 'development';

  return {
    entry: './src/main.ts', // Entry point of your application
    mode: "development",
    output: {
      filename: 'main.js',
      clean: true,
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    target: "node",
    resolve: {
      extensions: [ '.js','.ts',],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      // new NodePolyfillPlugin(),
      new Dotenv({
        path: `.${environment}.env`,
      }),
    ]
  }
};
