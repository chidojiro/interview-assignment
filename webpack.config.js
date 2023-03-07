const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.ts',
    libraryTarget: 'commonjs',
    umdNamedDefine: true,
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NEXT_PUBLIC_RESOURCE_PREFIX': JSON.stringify(process.env.NEXT_PUBLIC_RESOURCE_PREFIX),
      // ...
    }),
  ],
};
