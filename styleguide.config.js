const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  components: 'components/**/[A-Z]*.vue',
  ignore: ['components/prismic/**/*.vue'],
  defaultExample: true,
  require: [
    path.join(__dirname, './assets/styles/global.scss'),
    path.join(__dirname, './assets/styles/variables/variables.scss')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              sass: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    data: '@import "./assets/styles/variables/variables.scss";',
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
    },
    plugins: [new VueLoaderPlugin()],
  },
  usageMode: 'expand',
  exampleMode: 'expand',
};