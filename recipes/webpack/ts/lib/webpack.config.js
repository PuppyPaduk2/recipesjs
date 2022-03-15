const path = require("path");
const NodeExternals = require("webpack-node-externals");

const cwd = process.cwd();

module.exports = (env) => ({
  mode: env.mode || "production",
  target: "node",
  entry: {
    index: path.resolve(cwd, "./src/index"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.resolve(cwd, "./src"), path.resolve(cwd, "./node_modules")],
  },
  externals: [NodeExternals()],
  output: {
    filename: "[name].js",
    path: path.resolve(cwd, "./dist"),
    library: "webpackNumbers",
    libraryTarget: "umd",
  },
  watchOptions: {
    aggregateTimeout: 100,
  },
});
