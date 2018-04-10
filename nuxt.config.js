module.exports = {
  head: {
    title: 'Serverless Side Rendering',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project with Serverless' }
    ]
  },
  build: {
    vendor: ['axios']
  },
  srcDir: 'src/',
  performance: {
    gzip: false
  },
  router: {
    base: '/dev/'
  },
  dev: false
}
