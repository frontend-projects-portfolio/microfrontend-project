const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3001 },
  output: { publicPath: "auto" },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App" },
      shared: {
        react: { singleton: true, requiredVersion: "18.3.1" },
        "react-dom": { singleton: true, requiredVersion: "18.3.1" },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};