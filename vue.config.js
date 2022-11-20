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

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/dist/'
  //   : '/dist/'
};