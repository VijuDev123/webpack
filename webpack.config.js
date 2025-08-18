const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/scripts.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
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
            presets: [["@babel/preset-env", { targets: "IE 11" }]],
          },
        },
      },
    ],
  },
};
