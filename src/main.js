import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import 'github-markdown-css/github-markdown.css'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/googlecode.css'



Vue.use(VueHighlightJS)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.config.devtools = true;


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


