import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
import router from './router/index'
import App from './app.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'highlight.js/styles/default.css'
import store from './store'
Vue.use(VueRouter)
Vue.use(iView)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
