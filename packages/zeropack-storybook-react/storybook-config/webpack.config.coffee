zeropackCore = require 'zeropack-core'
path = require 'path'

module.exports = (baseConfig, env, defaultConfig) =>
  context = zeropackCore.generateContext();
  {webpackConfig} = context
  webpackConfig.mode = 'development'
  webpackConfig.entry = baseConfig.entry
  webpackConfig.output = baseConfig.output
  webpackConfig.plugins.push baseConfig.plugins...
  webpackConfig
