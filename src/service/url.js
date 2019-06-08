'use strict'

export const config = require('../../config')
export const env = process.env.NODE_ENV === 'development' ? config.dev.env : config.build.env
const host = env.HOST.replace(/"/g, '')
// const managePrefix = ""


export default {
  auth_service: {
      login: host + 'user/login',
      logout: host + 'user/logout/'
  },
}