const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProd ? './' : '/',
  outputDir: 'dist',  //输出文件目录
  assetsDir:'static',  //放置生成的静态资源 (js、css、img、fonts) 的目录。
  indexPath: 'index.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  productionSourceMap: false, //将压缩后的代码和压缩前的代码做映射，方便调试
  filenameHashing: true, //文件名哈希值
  configureWebpack: config => {
    if (isProd) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
    }
  },
}