// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuetify from 'vuetify'
// import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA5jOPhupaW_aSnm4heRUNo5CPV0j5fLXk',
      authDomain: 'classifieds341.firebaseapp.com',
      databaseURL: 'https://classifieds341.firebaseio.com',
      projectId: 'classifieds341',
      storageBucket: 'classifieds341.appspot.com'
    })
  }
})
