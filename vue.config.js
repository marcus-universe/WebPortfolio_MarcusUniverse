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
      }
  };