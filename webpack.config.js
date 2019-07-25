var path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    libraryTarget: "umd",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  externals: {
    react: "react",
    "next/dynamic": "next/dynamic"
  }
};
