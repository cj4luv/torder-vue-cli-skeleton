/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  // https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started
  chainWebpack(config) {
    // Set up all the aliases we use in our app.
    config.resolve.alias.clear().merge(require('./aliases.config').webpack);
  },
  // Configure Webpack's dev server.
  // https://cli.vuejs.org/guide/cli-service.html
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
      { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
      { before: require('./tests/mock-api') }),
  },
};
