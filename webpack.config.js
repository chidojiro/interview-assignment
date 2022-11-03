const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.js",
    libraryTarget: "commonjs",
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "@hoc": path.resolve(__dirname, "./src/hoc"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
