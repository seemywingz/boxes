const devServerPort = 9000;
const path = require('path');
const srvDir = path.resolve(__dirname, 'srv');

module.exports = {
  entry: './src/index.js',
  output: {
    path: srvDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: srvDir,
    },
    port: devServerPort,
  },
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
    },
  },
};
