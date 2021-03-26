const { resolve } = require('path')

module.exports = {
  mode:"development",
  entry: resolve(__dirname, 'js/03_test_封装.js'),
  output: {
    filename: 'build.js',
    path:resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
}