module.exports = {
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

    publicPath: process.env.NODE_ENV === 'production'
      ? '/dist/'
      : '/'
  };