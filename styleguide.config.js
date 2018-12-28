const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  theme: {
    maxWidth: "100%",
    sidebarWidth: 300,
    fontFamily: {
      base: ["'Fira Sans'", "Helvetica", "Arial", "sans-serif"],
      monospace: ["Consolas", "'Liberation Mono'", "Menlo", "monospace"],
    }
  },
  //pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      sectionDepth: 1
    },
    {
      name: 'Base Components',
      content: 'docs/base-components.md',
      components: 'components/base/**/*.vue',
      sectionDepth: 2
    },
    {
      name: 'Layout Components',
      components: 'components/layout/**/*.vue',
      sectionDepth: 2
    },
    {
      name: 'Banners',
      components: 'components/banners/**/*.vue',
      sectionDepth: 2
    },
    {
      name: 'Slice Components',
      components: 'components/slices/**/*.vue',
      sectionDepth: 2
    },
    {
      name: 'Utility Components',
      components: 'components/utility/**/*.vue',
      sectionDepth: 2
    }
  ],
  webpackConfig: {
    resolve: {
      extensions: ['*', '.js', '.vue', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loaders: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                data: '@import "./assets/styles/variables/variables.scss";',
                outputStyle: "compressed"
              }
            }
          ]
        }
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
  usageMode: 'expand',
  exampleMode: 'expand',
};