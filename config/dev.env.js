'use strict'
// webpack相关配置
// 开发环境的变量，npm run dev命令；在build文件下webpack.dev.conf可找到在什么地方引入了此变量
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://www.fastmock.site/mock/9dde0f90455e41b2d3b4374fdbc03fbd/api"',
})
