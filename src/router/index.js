import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/postad', component: 'Postad' },
  { path: '/userProfile', component: 'UserProfile', meta: { requiresAuth: true } }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`),
    meta: route.meta
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser
  if (requiresAuth && !user) {
    next('/signin')
  }
  next()
})

export default router
