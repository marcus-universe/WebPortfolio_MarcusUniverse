// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // }

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/dist/'
  //   : '/dist/'
};