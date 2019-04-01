const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  indexPath: isProd ? '200.html' : 'index.html',

  runtimeCompiler: true,

  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve(__dirname, './node_modules/vue'),
      },
    },
  },
};
