import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/index.vue'
import Home from '../views/Home.vue'
// import Product from '../views/product/product.vue'
import Product from '../views/product/productv2.vue'
import History from '../views/history.vue'
import Register from '../views/auth/register.vue'
import Login from '../views/auth/login.vue'
import Profile from '../views/auth/components/profile.vue'
import User from '../views/user/user.vue'
import { store } from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { requiresAdmin: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/product',
  //   name: 'Product',
  //   component: Product,
  //   meta: { requiresAdmin: true }
  // },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Authorization
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (localStorage.getItem('roleId') === '2') {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
