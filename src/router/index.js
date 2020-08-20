import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/one',
        component: () => import('@/views/one')
      },
      {
        path: '/two',
        component: () => import('@/views/two')
      },
      {
        path: '/three',
        component: () => import('@/views/three')
      },


    ]
  },
  {
    path: '/test',
    component: () => import('@/views/test')
  },
  {
    path: '/abbrs',
    component: () => import('@/views/abbrs')
  },
  {
    path: '/newAbbr',
    component: () => import('@/views/newAbbr')
  },
  {
    path: '/drag',
    component: () => import('@/views/drag')
  },

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
