'use strict'
// webpack相关配置
// 开发环境的变量，npm run dev命令；在build文件下webpack.dev.conf可找到在什么地方引入了此变量
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5bdc1a3496a2e50a9ee197dc/vue-admin"',
})
