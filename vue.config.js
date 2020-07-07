module.exports = {
  "transpileDependencies": [
    "vuetify",
  ],
  configureWebpack: {
    externals: {
      'vue': 'Vue', // 配置使用CDN
      'vue-router': 'VueRouter', // 配置使用CDN
      'vuetify': 'vuetify', // 配置使用CDN
      'axios': 'axios', // 配置使用CDN
    }
  }
}

