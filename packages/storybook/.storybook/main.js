const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const postcssModules = require('postcss-modules')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        styleLoaderOptions: {},
        cssLoaderOptions: {
          modules: true,
          sourceMap: false,
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [],
          },
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]
    config.module.rules.push({
      test: /\.(tsx)?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },

}