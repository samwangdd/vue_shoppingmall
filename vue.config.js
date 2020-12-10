module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
      sass: {
        // prependData: `@import 'node_modules/mathsass/dist/math'`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@/*': './src/*',
        // assets: '@/assets',
        // components: '@/components',
        // views: '@/views',
      },
    },
  },
  runtimeCompiler: true,
};
