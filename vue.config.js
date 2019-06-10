const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  indexPath: isProd ? '200.html' : 'index.html',

  runtimeCompiler: true,

  configureWebpack: {
    devServer: {
      watchOptions: {
        aggregateTimeout: 500,
      },
    },
    resolve: {
      alias: {
        vue: path.resolve(__dirname, './node_modules/vue'),
        luxon: path.resolve(__dirname, './node_modules/luxon'),
      },
    },
  },
};
