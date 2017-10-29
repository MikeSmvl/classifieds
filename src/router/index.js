import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

const routerOptions = [
  { path: '/', component: 'Landing', meta: { requiresGuest: true } },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/postad', component: 'Postad', meta: { requiresAuth: true } },
  { path: '/searchresults', component: 'SearchResults', meta: { requiresAuth: true } },
  { path: '/userProfile', component: 'UserProfile', meta: { requiresAuth: true } },
  { path: '/home/:id', component: 'AdPage', meta: { requiresAuth: true } },
  { path: '/searchresults/:id', component: 'AdPage', meta: { requiresAuth: true } }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`),
    meta: route.meta
  }
})

Vue.use(Router)

import NotFound from '@/components/NotFound'

const router = new Router({
  mode: 'history',
  routes: [
    ...routes,
    { path: '*', component: NotFound }
  ]
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser
  if (requiresAuth && !user) {
    next('/signin')
  }
  next()
})
// Used to redirect landing page to home page for logged in users
router.beforeEach((to, from, next) => {
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  const user = firebase.auth().currentUser
  if (requiresGuest && user) {
    next('/home')
  }
  next()
})

export default router
