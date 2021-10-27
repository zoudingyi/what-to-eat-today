module.exports = {
  devServer: {
    port: 9626,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '今天吃啥！';
      return args;
    });
  }
};
