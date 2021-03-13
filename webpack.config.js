const { HotModuleReplacementPlugin } = require("webpack");
const path = require('path');

const longNameLoader = `very-long-folder-name-to-simplify-showcasing-the-setup-with-multiple-chained-loaders-becaue-the-end-result-should-be-the-same-as-it-is-just-a-system-limitation-that-webpack-should-possibly-account-for-and-shorten-when-needed`;
const shortNameLoader = `short-name-loader`

module.exports = {
  mode: "development",
  target: "node",
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // can comment this out and the build/hmr works fine
          path.resolve(__dirname, "loaders", longNameLoader, "loader.js"),
          path.resolve(__dirname, "loaders", shortNameLoader, "loader.js")
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
};
