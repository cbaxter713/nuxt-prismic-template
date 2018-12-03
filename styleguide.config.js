const { resolve } = require('path');
const rules = require('vue-webpack-loaders');

module.exports = {
  components: 'components/**/[A-Z]*.vue',
  webpackConfig: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '~': resolve(__dirname, '/'),
        '@': resolve(__dirname, '/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: ['./assets/styles'],
                    data: '@import "global.scss";',
                    outputStyle: 'compressed',
                  },
                },
              ],
            },
          },
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loader: 'style-loader!css-loader!sass-loader',
        },
      ],
    }
  },
  showUsage: true,
  vuex: './store/index',
};