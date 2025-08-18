const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/scripts.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
