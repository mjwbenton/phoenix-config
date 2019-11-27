const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "phoenix.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
};
