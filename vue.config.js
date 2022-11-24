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
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  // configureWebpack: {
  //   optimization: {
  //     minimize: true,
  //     splitChunks: {
  //       minSize: 1000,
  //       maxSize: 250000,
  //       cacheGroups: {
  //         vendors: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendor',
  //           chunks: 'initial',
  //           priority: -30
  //         },
  //       }
  //     }
  //   }
  // }
};