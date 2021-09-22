const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  new NodePolyfillPlugin(),
  new ForkTsCheckerWebpackPlugin()
];
