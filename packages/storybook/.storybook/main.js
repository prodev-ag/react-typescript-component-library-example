const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
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
    config.resolve.alias = {
      '@library/core': path.resolve(__dirname, '../../core/src/'),
      '@library/icon': path.resolve(__dirname, '../../icons/src/'),
    }

    return config
  },

}