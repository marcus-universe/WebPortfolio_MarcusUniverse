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
                @import "~@/sass/_variables.sass";
                @import "~@/sass/_base.sass";
                `
      }
    }
  },

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/dist/'
  //   : '/dist/'
};