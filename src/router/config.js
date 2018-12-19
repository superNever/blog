/**
 * Created by wanghongxiang on 2018/2/3.
 */

const routers = [
  {
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['@/pages/home/index.vue'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: 'login'
    },
    component: (resolve) => require(['@/pages/login/index.vue'], resolve),
    children: [
      {
        path: 'register',
        meta: {
          title: 'register'
        },
        component: (resolve) => require(['@/pages/login/register.vue'], resolve)
      },
      {
        path: 'loginin',
        meta: {
          title: 'loginin'
        },
        component: (resolve) => require(['@/pages/login/loginin.vue'], resolve)
      }
    ]
  },
  {
    path: '/tmpl',
    meta: {
      title: 'template'
    },
    component: (resolve) => require(['@/pages/dytmpl/index.vue'], resolve)
  },
  {
    path: '/blog',
    meta: {
      title: 'blog'
    },
    component: (resolve) => require(['@/pages/blog/index.vue'], resolve)
  },
  {
    path: '/acticle',
    meta: {
      title: 'acticle'
    },
    component: (resolve) => require(['@/pages/blog/acticle/index.vue'], resolve)
  },
  {
    path: '/acticle/add',
    meta: {
      title: 'acticle-add'
    },
    component: (resolve) => require(['@/pages/blog/acticle/add.vue'], resolve)
  },
  {
    path: '/acticle/detail',
    meta: {
      title: 'acticle-detail'
    },
    component: (resolve) => require(['@/pages/blog/acticle/detail.vue'], resolve)
  },
  {
    path: '/archive',
    meta: {
      title: 'archive'
    },
    component: (resolve) => require(['@/pages/archive/index.vue'], resolve)
  },
  {
    path: '/about',
    meta: {
      title: 'about'
    },
    component: (resolve) => require(['@/pages/about/index.vue'], resolve)
  },
  {
    path: '/tags',
    meta: {
      title: 'tags'
    },
    component: (resolve) => require(['@/pages/tags/index.vue'], resolve)
  }
]
export default routers
