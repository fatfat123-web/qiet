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

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
