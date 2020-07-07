// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
  "transpileDependencies": [
    "vuetify",
  ],
  configureWebpack: {
     plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    externals: {
      'vue': 'Vue', // 配置使用CDN
      'vue-router': 'VueRouter', // 配置使用CDN
      'vuetify': 'vuetify', // 配置使用CDN
      'axios': 'axios', // 配置使用CDN
    }
  }
}

