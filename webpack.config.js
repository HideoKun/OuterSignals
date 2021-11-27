const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./siteConfig.json");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");

console.log(config);

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "assets", to: "./" }],
    }),
    new HtmlWebpackTagsPlugin({
      hash: (path, hash) => path + "?" + hash,
      links: ["styles.css"],
    }),
    new HtmlWebpackPlugin({
      ...config,
      template: path.resolve(__dirname, "templates/index.html"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
