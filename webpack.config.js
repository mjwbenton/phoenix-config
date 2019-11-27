const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: __dirname,
    filename: ".phoenix.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
};
