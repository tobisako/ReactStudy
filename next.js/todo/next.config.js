const webpack = require('webpack')
const nextSourceMaps = require('@zeit/next-source-maps')()
const path = require('path');

module.exports = nextSourceMaps({
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  webpack: (config, { isServer, buildId }) => {
    if (!isServer) {
      config.resolve.alias['@store'] = path.join(__dirname) + '/src/store'
      console.log("put:" + config.resolve.alias['@store']);
      config.resolve.alias['@components'] = path.join(__dirname) + '/src/components'
      config.resolve.alias['@common'] = path.join(__dirname) + '/src/common'
    }
    return config
  },
})
