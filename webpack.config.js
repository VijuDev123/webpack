const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
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
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 👈 allow imports without extension
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 👈 handle .js and .jsx
        exclude: /(node_modules|bower_components)/,
        use: "ts-loader",
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
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
