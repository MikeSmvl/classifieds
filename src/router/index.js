import Vue from 'vue'
import Router from 'vue-router'

const routerArray = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home' },
  { path: '/postad', component: 'Postad' },
  { path: '/userProfile', component: 'UserProfile' }
]

const routes = routerArray.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
