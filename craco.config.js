const path = require('path')
const cracoLess = require('craco-less')
const plugin = require('eslint-plugin-react')
// 如果是 Node.js 内置模块（如 fs、path、http），require 直接加载它们。
// 如果是第三方模块（如 express），Node.js 会从 node_modules 目录查找并加载。
// 如果是自定义模块（如./ myModule.js），需要使用相对或绝对路径。
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [{ plugin: cracoLess }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
