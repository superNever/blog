import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Routers from './config'
import Util from '@/libs/util'
Vue.use(Router)

// 路由配置
const RouterConfig = {
  mode: 'hash',
  routes: Routers
}
const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
