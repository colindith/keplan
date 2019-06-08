'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// api server in docker-compose network
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '"http://localhost:8000/"',
})
