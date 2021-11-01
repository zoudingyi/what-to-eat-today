const defaultSettings = require('./src/settings.js');

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/what-to-eat-today/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: 9626,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = defaultSettings.title;
      return args;
    });
  }
};
