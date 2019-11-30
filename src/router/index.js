import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {path: '', component: List},
      {path: '/detail/:id', component: Detail, props: true},
      {path: '/cart', component: Cart},
    ]
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter: (to, from, next) => {
      if (!store.state.isLogin) {
        next('/login?redirect='+to.path)
      } else {
        next()
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/about' && !window.isLogin) {
//     next('/login?redirect='+to.path)
//   } else {
//     next()
//   }
// })

export default router
