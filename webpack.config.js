const webpackMerge = require('webpack-merge');

const commonConfig = require('./build-utils/webpack.common');

const addons = (addonsArg) => {
  let addons = [].concat.apply([], [addonsArg]).filter(Boolean);

  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}`));
};

module.exports = env => {
  console.log('env: ', env);
  const envConfig = require(`./build-utils/webpack.${env.env}`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons))

  return mergedConfig;
}
