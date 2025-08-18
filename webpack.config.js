const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/scripts.js"),
  output: {
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      inject: "body",
    }),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // our code will be compatible with Internet Explorer 11
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: "IE 11" }],
            ],
          },
        },
      },
    ],
  },
};
