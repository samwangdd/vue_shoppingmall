module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
      },
    },
  },
};
