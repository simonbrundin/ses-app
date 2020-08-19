module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ses-app/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/style.scss";
        `
      }
    }
  }
}