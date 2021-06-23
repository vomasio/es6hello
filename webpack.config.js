const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    disableHostCheck: true,
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    port: 8080,
  },
  output: {
      libraryTarget: 'umd'
  }
};