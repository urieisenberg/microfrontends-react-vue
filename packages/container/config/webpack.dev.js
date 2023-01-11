const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js', //the word marketing to match the name in marketing webpack config
      },
      shared: packageJson.dependencies,
      //shared dependencies with container app (host) to avoid duplication of code in the browser (bundle size) and to avoid version conflicts
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); //dev config overrides common config as a second argument
